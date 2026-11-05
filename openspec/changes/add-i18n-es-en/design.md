# Design

## Context

Ver `proposal.md` para la motivación. El estado actual que condiciona el diseño:

- Next.js `16.4.3` (App Router), React 19, TypeScript, Tailwind v4. Despliegue en Vercel, sin `output: "export"`.
- `next.config.ts` tiene `cacheComponents: true` y `partialPrefetching: true`. La app ya usa `next/root-params` (estable desde 16.3), lo que permite renderizado estático con un segmento `[locale]` sin `setRequestLocale`.
- `src/app/layout.tsx` es el root layout y contiene metadata, OG, Twitter y dos bloques JSON-LD. La home está en `src/app/(home)/page.tsx` y renderiza `src/Layout/Home.tsx`, que es un componente cliente que arrastra todo el árbol.
- No existe `src/app/[locale]`, ni `proxy.ts`, ni `middleware.ts`. No existe `src/pages` (y no debe crearse: activaría el Pages Router). `src/app/blog/[slug]` y `src/app/(home)/shaders` están vacíos.
- El formulario usa `fetch("/api/contact")` + Nodemailer; no hay EmailJS. `@vercel/analytics` está instalado pero sin usar.
- No hay specs previas ni tests automatizados. La validación es `pnpm lint` y `pnpm build`.

## Goals / Non-Goals

**Goals:**

- Que `/es` y `/en` sean documentos completos, prerenderizados y canónicos por separado.
- Que el idioma se resuelva antes del render, sin parpadeo ni contenido cruzado.
- Que la estructura sea directamente trasladable al proyecto con auth + base de datos.
- Mantener el diseño, las animaciones, los anchors y el flujo de contacto actuales.

**Non-Goals:**

- Blog, analytics, CMS, detección por país o dominio, rutas localizadas (`/en/about`).
- Traducir el PDF del CV o el correo transaccional.
- Convertir la página entera a Server Components.

## Decisions

### D1. `next-intl` 4.14.9 como única librería de i18n

Es la opción con soporte nativo de App Router, `generateMetadata`, `hreflang`, formateo y renderizado estático. `next-i18next` está centrada en Pages Router; `react-i18next` no resuelve rutas ni SEO; el i18n nativo de Next solo existe para Pages Router. Paraglide/inlang es viable pero exige construir a mano el routing y la integración con metadata, justo lo que aquí se quiere aprender.

**Alternativa descartada:** implementación manual con diccionarios y un segmento `[locale]`. Funciona, pero reimplementa detección, cookie, alternates y navegación tipada.

### D2. `localePrefix: "always"`, default `es`, root 307

`/es` y `/en` siempre explícitos: una sola forma de URL por idioma, sin ambigüedad para canonical ni para el selector. `/` redirige con 307 (temporal) y `x-default` apunta a `/es`. Pasar a 308 será un cambio de una línea después de validar en Search Console.

**Alternativa descartada:** `as-needed` (español sin prefijo). Ahorra una redirección, pero deja `/` con contenido y complica canonical, hreflang y el cambio de idioma.

### D3. `proxy.ts` con detección activa y cookie de un año

Se usa `src/proxy.ts` (nombre de la convención en Next 16; `middleware.ts` está deprecado). El matcher excluye `api`, `_next`, `_vercel` y rutas con punto. El proxy solo redirige y fija `NEXT_LOCALE`; no renderiza ni hace dinámicas las páginas. `localeDetection` queda activo y `localeCookie.maxAge` en `60 * 60 * 24 * 365`.

**Alternativa descartada:** `redirects()` en `next.config.ts`. Evita la función de runtime, pero no permite detección por cabecera ni cookie; se perdía una decisión ya tomada.

### D4. Root layout dentro de `[locale]` y API fuera

`src/app/layout.tsx` pasa a `src/app/[locale]/layout.tsx`, que se convierte en root layout (no hay ningún layout por encima). Ahí viven `<html lang>`, fuentes, `NextIntlClientProvider`, metadata y JSON-LD. `src/app/api/contact/route.ts` se queda fuera del segmento: los Route Handlers no necesitan layout y `next/root-params` no funciona en ellos en 16.4.

`generateStaticParams` devuelve los dos locales. La validación de un locale desconocido se hace con `hasLocale()` + `notFound()`: `dynamicParams = false` no es compatible con `cacheComponents`. Un prefijo no soportado pasa primero por el proxy al locale por defecto (`/fr` → `/es/fr`) y termina en 404, sin bucles.

### D5. `(home)` se aplana a `[locale]/page.tsx`

El route group no aporta nada con una sola página y añade un nivel al mover archivos. La URL no cambia (`/es`, `/en`). Si en el futuro se añaden grupos, se reintroduce sin impacto en las URLs.

### D6. Mensajes por namespace; `Home` sigue siendo cliente

`src/messages/{es,en}.json` con namespaces `nav`, `hero`, `experience`, `skills`, `projects`, `certificates`, `about`, `contact`, `footer` y `metadata`. `NextIntlClientProvider` recibe `getMessages()` desde el layout servidor; los componentes cliente usan `useTranslations`. El HTML prerenderizado ya contiene el texto del locale, así que el SEO no depende de hidratación.

`AboutMe` se parte en claves `about.p1`…`about.p4` para no meter `<br/>` dentro de un string traducible.

La paridad de claves se comprueba con `scripts/check-i18n.mjs` colgado de `prebuild`, de modo que un build con claves desiguales falla antes de compilar. Se evita así depender de una revisión manual o de que alguien recuerde comparar los dos JSON.

**Alternativa descartada:** convertir todo a Server Components. Es una refactorización mayor, independiente de i18n y con riesgo sobre `motion`.

### D7. Contenido con `{ es, en }` + `id`, no archivos duplicados

`docsProjects`, `docsCertificate` y las categorías de `constantsIcons` pasan a:

```ts
type Localized<T> = Record<Locale, T>;

interface ProjectItem {
  id: string;
  img: string;
  link: string;
  stack: string[];          // neutral
  platform: Localized<string>;
  title: Localized<string>;
  descripcion: Localized<string>;
}
```

Ventajas frente a `projects.es.ts` / `projects.en.ts`: una sola fuente para imagen, enlace, repo y stack; el compilador obliga a completar ambos idiomas; no se puede desalinear el orden. Frente a meter todo en los JSON de mensajes: no hay rutas de clave propensas a error para cada campo de cada proyecto, y la forma coincide con la que devolverá un `JOIN` con una tabla de traducciones en el proyecto futuro.

Las fechas de certificado se quedan como texto por idioma (`date: Localized<string>`), tal como se decidió, para no alterar el formato editorial.

Consecuencia obligatoria: `key` y `alt` dejan de usar `title` y pasan a usar `id`; `stack` no se traduce porque `ProjectCard` resuelve iconos comparando `label`.

### D8. Selector con navegación completa y hash explícito

El Navbar ya mantiene el hash con `useSyncExternalStore`. El selector construye `/${locale}${hash}` y usa un `<a>` normal:

- garantiza el scroll al ancla tras la recarga (el `Link` de next-intl no lo asegura con `scroll-behavior: smooth`);
- recalcula `<html lang>`, metadata y mensajes;
- pasa por el proxy y actualiza la cookie;
- evita estado cliente obsoleto al cruzar idiomas.

Los enlaces internos (`#experience`, `#skills`, …) siguen siendo `<a>` planos; usar el `Link` de next-intl los prefijaría y rompería el scroll suave actual.

**Trade-off aceptado:** se conserva la sección, no la posición dentro del scroll horizontal de `#projects`.

### D9. SEO generado por locale

`generateMetadata({ params })` en `[locale]/layout.tsx` con `getTranslations`. Canonical `/${locale}`; `alternates.languages` con `es`, `en` y `x-default → /es`; `openGraph.locale` `es_ES`/`en_US` con `alternateLocale`; Twitter en espejo. El sitemap recorre `routing.locales` y añade `alternates.languages`. Los JSON-LD se generan con el locale activo y traducen solo `jobTitle` e `inLanguage`; la identidad permanece estable.

**Alternativa descartada:** dejar el canonical global `/`. Google elegiría una sola versión y anularía el objetivo.

### D10. Errores del API por código, traducción en cliente

`/api/contact` devuelve `{ error: { code } }` con códigos estables (`INVALID_NAME`, `INVALID_EMAIL`, `INVALID_MESSAGE`, `MAIL_NOT_CONFIGURED`, `SEND_FAILED`). El formulario traduce el código con `contact.errors.*`; los fallos de red tienen su propio mensaje localizado. El correo que recibe el dueño se queda en español y no se le pasa `locale`.

**Alternativa descartada:** pasar `locale` al API y traducir en servidor. `next/root-params` no funciona en Route Handlers y el servidor no necesita saber el idioma del visitante.

### D11. Inglés: borrador de la IA en implementación, dos revisiones separadas

El inglés no se redacta en el proposal. Se produce como tarea de `tasks.md` dentro de la implementación y se revisa en dos checkpoints:

1. **Checkpoint B**: navbar, hero, skills, proyectos, certificados, contacto, footer, metadata, keywords y fechas.
2. **Checkpoint A**: `AboutMe` y los seis logros de `Experience`. Revisión línea por línea contra el original; no se alteran cifras (40 %, 20–30 usuarios, 97 Lighthouse, 2+ años, 40+ proyectos), fechas (2024, «2024 — Presente»), tecnologías, roles ni afirmaciones. Cualquier duda se escala antes de cerrar la tarea.

La separación existe porque el contenido en primera persona es el único donde una traducción "natural" puede introducir una promesa que el original no hace.

## Risks / Trade-offs

| Riesgo | Mitigación |
|---|---|
| Canonical global heredado deja una sola versión indexada | D9: canonical por locale y verificación en `view-source` de `/es` y `/en` |
| `cacheComponents` + `dynamicParams = false` rompe el build | D4: `hasLocale()` + `notFound()` |
| `next/root-params` no disponible en Route Handlers | D10: los errores se traducen en cliente, no en el API |
| Traducción inglesa altera cifras o afirmaciones | D11: Checkpoint A separado y revisión contra el original |
| Selector con `Link` pierde el ancla o el scroll suave | D8: `<a>` con recarga completa y `/${locale}${hash}` |
| Enlaces internos prefijados por error | D8: los anchors siguen como `<a>` planos |
| `key`/`alt` basados en `title` al volverse objeto | D7: `id` estable en proyectos y certificados |
| Iconos de stack desaparecen si se traduce el stack | D7: `stack` neutral y verificación de iconos en ambos idiomas |
| Página 404 de locale inválido sin root layout | Añadir `src/app/global-not-found.tsx` (Next 16) o validar antes de renderizar |
| Texto inglés más largo rompe tarjetas (`line-clamp-9`) | Revisión visual de `/en` en móvil y escritorio; ajustar solo si hay desbordamiento |
| Proxy no soportado si algún día se usa `output: "export"` | Documentado; hoy el despliegue es Vercel con SSG y proxy |
| Cambio de idioma pierde el progreso del scroll horizontal | Trade-off aceptado; se conserva la sección |

## Migration Plan

1. Rama de trabajo desde `feature/blog`; commit inicial con el change de OpenSpec.
2. Implementar en el orden de `tasks.md`: infraestructura → mensajes → datos → selector → SEO → inglés → verificación.
3. Validar en local con `pnpm lint` y `pnpm build`, comprobando que `/es` y `/en` salen como estáticas y que `/` responde 307.
4. Desplegar a Vercel. Verificar `/`, `/es`, `/en`, `/sitemap.xml`, `/robots.txt` y el formulario.
5. En Search Console: confirmar indexación de ambas URLs y, cuando estén estables, cambiar el 307 por 308 en `routing.ts`.
6. Rollback: revertir el commit del cambio. Al desaparecer `proxy.ts` y el segmento `[locale]`, `/` vuelve a servir la home en español; no hay migración de datos ni estado persistente que deshacer.

## Open Questions

Ninguna pendiente. Las decisiones de alcance, contenido, formato de fechas, detección, cookie, ubicación del selector y flujo de revisión del inglés quedaron cerradas antes de este diseño.
