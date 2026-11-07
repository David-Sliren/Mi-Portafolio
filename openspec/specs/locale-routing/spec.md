# locale-routing Specification

## Purpose

Define cómo el idioma forma parte de la URL, cómo se elige en la primera visita y cómo se conserva al navegar, sin depender de estado exclusivo del cliente.

## Requirements

### Requirement: Rutas con prefijo de idioma

El sistema SHALL servir cada página bajo un prefijo de idioma explícito, `/es` o `/en`, y toda URL pública del portafolio SHALL incluir ese prefijo.

#### Scenario: Página en español

- **WHEN** un visitante solicita `/es`
- **THEN** recibe la página renderizada en español

#### Scenario: Página en inglés

- **WHEN** un visitante solicita `/en`
- **THEN** recibe la página renderizada en inglés

### Requirement: Redirección de la raíz

El sistema SHALL responder a `GET /` con una redirección **307** hacia un locale, nunca con contenido sin idioma.

#### Scenario: Detección por cabecera

- **WHEN** se solicita `/` con `Accept-Language: en-US` y sin cookie de idioma
- **THEN** la respuesta es 307 con `Location: /en`

#### Scenario: Preferencia guardada

- **WHEN** se solicita `/` con la cookie `LANGUAGE_LOCAL_SLIRENDEV=es`
- **THEN** la respuesta es 307 con `Location: /es`

#### Scenario: Sin preferencia reconocible

- **WHEN** se solicita `/` sin cabecera ni cookie que coincidan con un locale soportado
- **THEN** la respuesta es 307 con `Location: /es`

#### Scenario: Rastreador en la raíz

- **WHEN** un buscador solicita `/`
- **THEN** recibe una redirección 307 y ningún documento con canonical propio

### Requirement: Cookie funcional de idioma

El sistema SHALL recordar el idioma elegido en la cookie `LANGUAGE_LOCAL_SLIRENDEV` durante un año y SHALL respetar una URL con prefijo por encima del valor de la cookie.

#### Scenario: Se guarda la preferencia

- **WHEN** un visitante abre `/en` sin cookie previa
- **THEN** la respuesta fija `LANGUAGE_LOCAL_SLIRENDEV=en` con un `Max-Age` de un año

#### Scenario: La URL manda sobre la cookie

- **WHEN** un visitante con `LANGUAGE_LOCAL_SLIRENDEV=es` abre `/en`
- **THEN** ve la página en inglés y no es redirigido a `/es`

### Requirement: Renderizado estático por idioma

El sistema SHALL prerenderizar `/es` y `/en` en tiempo de build; el proxy SHALL limitarse a redirigir y no SHALL convertir las páginas en dinámicas.

#### Scenario: Build estático

- **WHEN** se ejecuta el build de producción
- **THEN** `/es` y `/en` aparecen como rutas estáticas prerenderizadas

### Requirement: Locale desconocido

El sistema SHALL terminar en 404 para un prefijo que no sea `es` o `en`, sin bucles de redirección; la petición puede pasar antes por una redirección al locale por defecto.

#### Scenario: Idioma no soportado

- **WHEN** un visitante solicita `/fr`
- **THEN** es redirigido a `/es/fr` y termina recibiendo una respuesta 404, sin bucles de redirección

### Requirement: Cambio de idioma conservando la sección

El selector de idioma SHALL navegar al mismo documento en el otro idioma conservando el fragmento (`#hash`) activo.

#### Scenario: Cambio desde una sección

- **WHEN** un visitante está en `/es#skills` y activa inglés
- **THEN** navega a `/en#skills` y la página se posiciona en la sección de habilidades

#### Scenario: Cambio sin sección

- **WHEN** un visitante está en `/es` sin fragmento y activa inglés
- **THEN** navega a `/en` y la página se muestra desde el inicio

### Requirement: Anclas internas dentro del idioma

Los enlaces de sección SHALL resolver contra la URL actual sin cambiar de idioma ni forzar una recarga completa.

#### Scenario: Ancla en inglés

- **WHEN** un visitante en `/en` pulsa un enlace a `#experience`
- **THEN** la URL resultante es `/en#experience` y el idioma no cambia

### Requirement: Compatibilidad con enlaces antiguos

Las URLs antiguas sin prefijo SHALL seguir llegando al contenido mediante la redirección de la raíz, sin devolver 404.

#### Scenario: Enlace antiguo a la raíz

- **WHEN** un visitante abre una URL antigua que apunta a `/`
- **THEN** es redirigido a un locale y ve el portafolio
