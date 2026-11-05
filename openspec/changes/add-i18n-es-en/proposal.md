# Proposal

## Why

El portafolio solo existe en español. Quien lo usa para buscar trabajo compite también por oportunidades en inglés, y hoy un reclutador angloparlante no tiene una versión legible ni indexable. La solución debe vivir en la URL (`/es`, `/en`) y no en estado del cliente, porque el SEO es parte del objetivo: Google debe poder rastrear, canonicalizar e indexar cada idioma por separado.

Este cambio es además el ejercicio de aprendizaje de i18n que después se aplicará a un proyecto con autenticación y base de datos, por lo que la estructura elegida debe ser la misma que se reutilizará allí: rutas por locale, mensajes separados del código, contenido localizado con una clave estable por entidad y metadata generada por idioma.

## What Changes

- Se introduce `next-intl` con rutas prefijadas `/es` y `/en`, `defaultLocale: "es"` y `localePrefix: "always"`.
- **BREAKING** (forma de las URLs): `/` deja de ser la página y pasa a redirigir con **307** a un locale; `/es` y `/en` pasan a ser las URLs canónicas. Los enlaces antiguos a `/` siguen funcionando por redirección.
- Se añade `src/proxy.ts` (convención de Next.js 16, antes `middleware.ts`) con detección automática por `Accept-Language` y cookie funcional `NEXT_LOCALE` de un año. El proxy solo redirige; las páginas siguen siendo estáticas (SSG).
- El root layout se mueve a `src/app/[locale]/layout.tsx` y la home a `src/app/[locale]/page.tsx`. `src/app/api/contact/route.ts` permanece fuera del segmento de locale.
- Todo el copy de UI se extrae a `src/messages/es.json` y `src/messages/en.json` por namespace, y se sustituye en los componentes con `useTranslations` / `getTranslations`.
- Los datos de proyecto, certificado y categorías de skills pasan a un patrón `{ es, en }` con `id` estable; `stack`, URLs de imágenes, enlaces, nombres propios y tecnologías no se traducen.
- Se añade un selector `ES | EN` en el navbar de escritorio y en el menú móvil que conserva el `#hash` de la sección actual.
- La metadata, Open Graph, Twitter Card, keywords y los dos bloques JSON-LD se generan por locale. El sitemap declara ambas URLs con `alternates.languages` y el canonical deja de ser global.
- El formulario de contacto traduce sus mensajes en cliente; el API devuelve códigos estables para que el cliente pueda traducirlos. El correo transaccional que recibe el dueño permanece en español.

Fuera de alcance: blog, analytics, EmailJS (no existe en el proyecto), rediseño visual, cambio de imágenes o enlaces, y traducción del CV (se mantiene el mismo enlace para ambos idiomas).

## Capabilities

### New Capabilities

- `locale-routing`: resolución del idioma por URL, redirección de `/`, detección automática, cookie de preferencia, renderizado estático de cada locale y cambio de idioma conservando el ancla actual.
- `localized-content`: contenido de UI y de datos (proyectos, certificados, skills) disponible en `es` y `en`, sin alterar cifras ni afirmaciones del contenido en primera persona, y con mensajes de error del formulario localizados.
- `multilingual-seo`: canonical, `hreflang`, sitemap, Open Graph, Twitter Card, keywords y JSON-LD correctos y distintos por idioma, con `x-default` apuntando a `/es`.

### Modified Capabilities

- Ninguna. El proyecto no tiene specs existentes (`openspec/specs/` está vacío).

## Impact

- **Dependencias**: nueva `next-intl` (4.14.9; compatible con Next 16) y su plugin en `next.config.ts`. No se eliminan dependencias.
- **Rutas y archivos**: `src/app/layout.tsx` → `src/app/[locale]/layout.tsx`; `src/app/(home)/page.tsx` → `src/app/[locale]/page.tsx`; nuevos `src/proxy.ts`, `src/i18n/{routing,request,navigation}.ts` y `src/messages/{es,en}.json`.
- **Componentes**: `Navbar`, `Hero`, `Experience`/`JobCard`, `Skills`, `Projects`/`ProjectsMobile`/`ProjectCard`, `Certificates`/`CertificateCard`, `AboutMe`, `Contact`/`Form`/`InfoCard`, `Footer` y `Layout/Home.tsx`.
- **Datos**: `src/constants/docsProjects.ts`, `docsCertificate.ts` y `constantsIcons.ts`.
- **SEO**: `src/app/sitemap.ts`, metadata y JSON-LD del layout. `robots.ts` se mantiene.
- **API**: `src/app/api/contact/route.ts` mantiene el envío con Nodemailer; solo cambia el contrato de errores (códigos) si se implementa la traducción en cliente.
- **Operación posterior**: tras validar en Search Console, el 307 de `/` se cambiará a 308. No forma parte de la implementación inicial.
- **Riesgo aceptado**: al cambiar de idioma se recarga la página y se pierde la posición dentro del scroll horizontal de `#projects`; se conserva la sección, no el progreso de la animación. El CV en inglés sigue apuntando al PDF en español.
