# multilingual-seo Specification

## Purpose

Define cómo cada idioma se presenta a los buscadores como una página distinta, completa y correctamente relacionada con la otra, sin contenido duplicado ni canonical compartido.

## Requirements

### Requirement: Metadata por idioma

Cada locale SHALL generar su propio título, descripción y keywords en el idioma correspondiente, sin reutilizar el texto del otro idioma.

#### Scenario: Metadata en inglés

- **WHEN** se inspecciona el HTML de `/en`
- **THEN** el título y la descripción están redactados en inglés

#### Scenario: Metadata en español

- **WHEN** se inspecciona el HTML de `/es`
- **THEN** el título y la descripción están redactados en español

### Requirement: Canonical por locale

Cada página SHALL declarar una URL canónica absoluta que apunte a su propia versión de idioma.

#### Scenario: Canonical de inglés

- **WHEN** se inspecciona `/en`
- **THEN** el canonical es la URL absoluta de `/en`

#### Scenario: Canonical de español

- **WHEN** se inspecciona `/es`
- **THEN** el canonical es la URL absoluta de `/es`

### Requirement: Alternates hreflang

Cada página SHALL declarar variantes `es`, `en` y `x-default`, con `x-default` apuntando a `/es`.

#### Scenario: Alternates en el documento

- **WHEN** se inspecciona el HTML de `/es` o `/en`
- **THEN** incluye enlaces alternate para `es`, `en` y `x-default` con sus URLs absolutas

### Requirement: Sitemap bilingüe

El sitemap SHALL incluir las URLs `/es` y `/en` y SHALL declarar las variantes de idioma de cada una.

#### Scenario: Entradas del sitemap

- **WHEN** se solicita `/sitemap.xml`
- **THEN** contiene una entrada para `/es` y otra para `/en`, cada una con `es`, `en` y `x-default`

### Requirement: Open Graph y Twitter por idioma

Las tarjetas sociales SHALL declarar el idioma del contenido (`es_ES` o `en_US`), su alternativa y textos localizados; Twitter SHALL reflejar los mismos valores.

#### Scenario: Open Graph en inglés

- **WHEN** se comparte `/en`
- **THEN** `og:locale` es `en_US`, `og:locale:alternate` es `es_ES` y el título y la descripción están en inglés

#### Scenario: Open Graph en español

- **WHEN** se comparte `/es`
- **THEN** `og:locale` es `es_ES`, `og:locale:alternate` es `en_US` y el título y la descripción están en español

### Requirement: Datos estructurados por idioma

Los bloques JSON-LD SHALL declarar `inLanguage` con el locale activo y traducir el cargo profesional; la identidad de la persona (nombre, alias, redes y tecnologías) SHALL permanecer estable.

#### Scenario: JSON-LD en inglés

- **WHEN** se inspecciona `/en`
- **THEN** `WebSite.inLanguage` es `en` y `Person.jobTitle` está en inglés

#### Scenario: Identidad estable

- **WHEN** se comparan los JSON-LD de `/es` y `/en`
- **THEN** `Person.name`, `sameAs` y `knowsAbout` son idénticos

### Requirement: Indexabilidad de ambos idiomas

Ninguna versión SHALL declarar `noindex`, y ambas SHALL estar permitidas en robots y presentes en el sitemap.

#### Scenario: Sin bloqueo de indexación

- **WHEN** se inspecciona la metadata de `/es` y `/en`
- **THEN** ambas permiten indexar y seguir

#### Scenario: Rastreo permitido

- **WHEN** se solicita `/robots.txt`
- **THEN** el rastreo de las páginas públicas está permitido y el sitemap está declarado
