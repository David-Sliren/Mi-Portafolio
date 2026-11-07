# Tasks

## 1. Preparación

- [x] 1.1 Ejecutar `pnpm build` y anotar la salida de rutas actual; verificar que la home se genera correctamente antes de tocar nada.
- [x] 1.2 Instalar `next-intl@4.14.9` y verificar que `pnpm-lock.yaml` se actualiza y `pnpm build` sigue pasando.

## 2. Infraestructura de routing

- [x] 2.1 Crear `src/i18n/routing.ts` con `locales: ["es", "en"]`, `defaultLocale: "es"`, `localePrefix: "always"`, detección activa y `localeCookie.maxAge` de un año; verificar que TypeScript compila (`pnpm lint`).
- [x] 2.2 Crear `src/i18n/request.ts` usando `next/root-params` y validando el locale con `hasLocale()` + `notFound()`, y crear `src/messages/es.json` y `src/messages/en.json` vacíos (`{}`) para que el build no falle antes de la sección 3; verificar con `pnpm lint`. El comportamiento de `/fr` (redirección a `/es/fr` y 404 sin bucles) se comprueba end-to-end en 2.6 y 9.3.
- [x] 2.3 Envolver `next.config.ts` con el plugin de next-intl apuntando a `src/i18n/request.ts`, conservando `cacheComponents`, `partialPrefetching` y las reglas de `turbopack`; verificar con `pnpm build`.
- [x] 2.4 Crear `src/i18n/navigation.ts` con `createNavigation(routing)` y verificar que exporta `Link`, `redirect`, `usePathname`, `useRouter` y `getPathname`.
- [x] 2.5 Crear `src/proxy.ts` con `createMiddleware(routing)` y matcher que excluya `api`, `trpc`, `_next`, `_vercel` y rutas con punto; verificar que `/api/contact` no pasa por el proxy y que `/` sí.
- [x] 2.6 Mover `src/app/layout.tsx` a `src/app/[locale]/layout.tsx` (con `LayoutProps<"/[locale]">`, `getLocale()` para `<html lang>` y `NextIntlClientProvider` con `getMessages()`), mover `src/app/(home)/page.tsx` a `src/app/[locale]/page.tsx`, añadir `generateStaticParams` con los dos locales y crear `src/app/global-not-found.tsx`; verificar en `pnpm build` que `/es` y `/en` son estáticas, que cada documento declara su `lang` y que `/fr` redirige a `/es/fr` y termina en 404 sin bucles.

## 3. Mensajes y componentes

- [x] 3.1 Completar `src/messages/es.json` y `src/messages/en.json` (ya existen vacíos desde 2.2) con los namespaces `nav`, `hero`, `experience`, `skills`, `projects`, `certificates`, `about`, `contact`, `footer` y `metadata`; verificar que ambos archivos son JSON válido y tienen las mismas claves.
- [x] 3.2 Migrar `Navbar` y `Footer` a `useTranslations`; verificar que los seis enlaces, el CTA de contacto y el copyright cambian de idioma.
- [x] 3.3 Migrar `Hero` y `Skills` (títulos y categorías); verificar que el nombre propio, el stack y las etiquetas técnicas no se traducen.
- [x] 3.4 Migrar `Experience` y `JobCard`, incluidos los seis logros; verificar que el periodo y los logros se muestran completos en ambos idiomas.
- [x] 3.5 Migrar `Projects`, `ProjectsMobile` y `ProjectCard`, incluido "Ver proyecto" y la etiqueta de plataforma; verificar que las cuatro tarjetas se renderizan en ambos idiomas sin desbordar `line-clamp-9`.
- [x] 3.6 Migrar `Certificates` y `CertificateCard`, incluidos encabezados, "Ver certificado" y el `alt` compuesto; verificar que las diez tarjetas se muestran completas.
- [x] 3.7 Migrar `AboutMe` con claves separadas `about.p1`…`about.p4` y las dos métricas; verificar que los cuatro párrafos conservan su estructura visual.
- [x] 3.8 Migrar `Contact`, `Form` e `InfoCard` (labels, placeholders, "Enviando…", "Cerrar" y confirmación); verificar que el formulario mantiene su comportamiento actual.
- [x] 3.9 Crear `scripts/check-i18n.mjs` y añadir a `package.json` los scripts `check:i18n` (`node scripts/check-i18n.mjs`) y `prebuild` (`pnpm check:i18n`); verificar que `pnpm check:i18n` sale con código 0 con claves iguales y falla al quitar temporalmente una clave de `en.json`.
- [x] 3.10 Ejecutar `pnpm check:i18n` y confirmar la paridad de claves, y revisar `/es` y `/en` para verificar que ninguna vista muestra claves crudas.
- [x] 3.11 Documentar en `README.md` la estructura `src/i18n` + `src/messages` y cómo añadir un idioma; verificar que los nombres de archivo citados existen.

## 4. Contenido localizado

- [x] 4.1 Convertir `skillCategories` en `constantsIcons.ts` para que `title` sea bilingüe manteniendo `label` e `icon` intactos; verificar que `fullSkill` sigue resolviendo los iconos de proyectos.
- [x] 4.2 Convertir `docsProjects.ts` al patrón `id` + `Localized<T>`, dejando `img`, `link`, `stack` y `repo` compartidos; actualizar `key` y `alt` a `id`; verificar que las cuatro tarjetas muestran imagen, enlace e iconos correctos en ambos idiomas.
- [x] 4.3 Convertir `docsCertificate.ts` al patrón `id` + `Localized<T>` con `date` como texto por idioma; verificar que las diez fechas se leen de forma natural en `es` y `en`.
- [x] 4.4 Revisar que ningún campo no lingüístico se duplicó por idioma y que no quedan referencias a `item.title` como `key` o `alt`; verificar con búsqueda en el código.

## 5. Selector de idioma

- [x] 5.1 Añadir el selector `ES | EN` en el navbar, reutilizando el hash de `useSyncExternalStore`, con `hrefLang`, `lang` y `aria-current`; verificar que navega a `/<locale><hash>`.
- [x] 5.2 Verificar en viewport móvil (320 a 390 px) que el selector cabe junto al logo y la hamburguesa y cambia el idioma conservando el hash.
- [x] 5.3 Probar el cambio desde cada sección (`#experience`, `#skills`, `#projects`, `#projectsMobile`, `#education`, `#about`, `#contact`) en ambos sentidos; verificar que la URL conserva el fragmento y la página se posiciona en la sección.

## 6. SEO

- [x] 6.1 Implementar `generateMetadata` por locale con título, descripción y `alternates` (canonical propio, `es`, `en`, `x-default → /es`); verificar en `view-source` de `/es` y `/en`.
- [x] 6.2 Añadir Open Graph y Twitter por idioma con `og:locale`, `og:locale:alternate` y textos traducidos; verificar las etiquetas en ambas páginas.
- [x] 6.3 Traducir las keywords y el `jobTitle` de los dos bloques JSON-LD, manteniendo `name`, `sameAs` y `knowsAbout`; verificar que ambos bloques son JSON válido y que `inLanguage` coincide con el locale.
- [x] 6.4 Actualizar `sitemap.ts` para listar `/es` y `/en` con `alternates.languages`; verificar el XML generado y que `robots.txt` sigue declarando el sitemap.
- [x] 6.5 Verificar que ninguna de las dos páginas declara `noindex` y que `/` responde 307 sin contenido canónico propio.

## 7. API y formulario

- [x] 7.1 Cambiar `/api/contact` para devolver códigos estables (`INVALID_NAME`, `INVALID_EMAIL`, `INVALID_MESSAGE`, `MAIL_NOT_CONFIGURED`, `SEND_FAILED`) sin alterar el envío con Nodemailer; verificar con `curl` cada caso.
- [x] 7.2 Mapear los códigos a mensajes localizados en `Form` y mantener los fallos de red traducidos; verificar que un correo inválido muestra el error en el idioma activo.
- [x] 7.3 Probar el envío correcto con credenciales configuradas y confirmar que el correo recibido sigue en español; verificar asunto, cuerpo y `replyTo`.

## 8. Redacción y revisión del inglés

- [ ] 8.1 Redactar el borrador completo en `en-US` de todos los namespaces y de los datos (`docsProjects`, `docsCertificate`, categorías de skills); verificar que no queda ninguna cadena en español salvo nombres propios y stack.
- [ ] 8.2 **Checkpoint B**: revisar el inglés de navbar, hero, skills, proyectos, certificados, contacto, footer, metadata, keywords y fechas; verificar naturalidad y consistencia de `en-US` sin cambios de diseño.
- [ ] 8.3 **Checkpoint A**: revisar línea por línea `AboutMe` y los seis logros de `Experience` contra el original; verificar que se conservan 40 %, 20–30 usuarios, 97 de Lighthouse, 2+ años, 40+ proyectos, 2024, «2024 — Presente» y que no se añadió ni suavizó ninguna afirmación.

## 9. Verificación final e integración

- [ ] 9.1 Ejecutar `pnpm lint` y corregir cualquier error o advertencia introducida por el cambio.
- [ ] 9.2 Ejecutar `pnpm build` y confirmar que `/es` y `/en` son estáticas, que no hay rutas dinámicas inesperadas y que el build termina sin errores.
- [ ] 9.3 Probar la matriz completa en `pnpm dev`: `/` → 307, cookie `NEXT_LOCALE` de un año, `/fr` → `/es/fr` → 404 sin bucles, anchors internos, selector con hash, formulario en ambos idiomas y `lang` correcto en cada documento.
- [ ] 9.4 Confirmar que `src/app/blog/[slug]` y `src/app/(home)/shaders` no se movieron ni se modificaron, y que el blog queda anotado para `src/app/[locale]/blog/[slug]`.
- [ ] 9.5 Desplegar a un preview de Vercel y repetir las comprobaciones de `/`, `/es`, `/en`, `/sitemap.xml`, `/robots.txt` y envío del formulario.

## Workflow follow-up

- Archivar el change cuando la revisión del proyecto esté aprobada.
- Tras validar ambas URLs en Search Console, cambiar el 307 de `/` por 308 en `src/i18n/routing.ts` (trabajo posterior, fuera de este change).
