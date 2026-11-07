# Spec Delta

## Purpose

Transparencia sobre las cookies utilizadas por el portafolio y control explícito del
visitante sobre el consentimiento, dado que el sitio solo utiliza una cookie funcional
de idioma y no activa cookies de análisis ni de publicidad.

## ADDED Requirements

### Requirement: Banner de cookies

El sistema SHALL mostrar un banner informando de las cookies utilizadas, con un botón
para aceptarlo, en ambos idiomas y sin bloquear el contenido de la página.

#### Scenario: Primera visita

- **WHEN** un visitante abre `/es` o `/en` sin haber aceptado antes
- **THEN** se muestra el banner con el texto en el idioma de la página y un botón «Aceptar»

#### Scenario: Aceptación persistente

- **WHEN** el visitante pulsa «Aceptar» y vuelve a cargar la página
- **THEN** el banner no se vuelve a mostrar y el estado se guarda en `localStorage`

#### Scenario: Sin bloqueo

- **WHEN** el banner está visible
- **THEN** la página sigue siendo navegable y el banner no intercepta el scroll ni los enlaces

#### Scenario: Texto en ambos idiomas

- **WHEN** se carga el banner en `/en`
- **THEN** el texto del banner y del botón están en inglés

### Requirement: Página de política de cookies

El sistema SHALL servir una página de política de cookies bajo cada locale en
`/cookies-policy`, con contenido localizado, canonical propio y entrada en el sitemap.

#### Scenario: Política en español

- **WHEN** un visitante solicita `/es/cookies-policy`
- **THEN** recibe la política redactada en español

#### Scenario: Política en inglés

- **WHEN** un visitante solicita `/en/cookies-policy`
- **THEN** recibe la política redactada en inglés

#### Scenario: Indexable

- **WHEN** se consulta el sitemap
- **THEN** `/es/cookies-policy` y `/en/cookies-policy` aparecen con `alternates.languages`

### Requirement: Declaración de cookies

La política SHALL listar exactamente las cookies que el sitio utiliza: la cookie de idioma
`LANGUAGE_LOCAL_SLIRENDEV` (finalidad, duración de un año, primera parte) y SHALL
declarar que no se usan cookies de análisis ni de publicidad.

#### Scenario: Inventario completo

- **WHEN** se lee la política en cualquier idioma
- **THEN** se menciona `LANGUAGE_LOCAL_SLIRENDEV`, su duración de un año y la ausencia de cookies de terceros
