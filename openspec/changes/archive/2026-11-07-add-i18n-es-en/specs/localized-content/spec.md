# Spec Delta

## Purpose

Define qué contenido debe existir en español e inglés, cómo se localizan los datos del portafolio y qué se debe conservar intacto al traducir el contenido en primera persona.

## ADDED Requirements

### Requirement: Cobertura de traducción de la interfaz

Toda cadena visible de la interfaz SHALL existir en `es` y `en`; ninguna vista SHALL mostrar claves sin resolver ni texto en el idioma equivocado.

#### Scenario: Recorrido completo en inglés

- **WHEN** un visitante recorre `/en` de inicio a fin
- **THEN** navbar, hero, experiencia, skills, proyectos, certificados, sobre mí, contacto y footer se muestran en inglés

### Requirement: Idioma del documento

El elemento raíz del documento SHALL declarar `lang` con el locale activo.

#### Scenario: Documento en inglés

- **WHEN** se inspecciona el HTML de `/en`
- **THEN** el elemento `html` declara `lang="en"`

#### Scenario: Documento en español

- **WHEN** se inspecciona el HTML de `/es`
- **THEN** el elemento `html` declara `lang="es"`

### Requirement: Datos localizados con identidad estable

Proyectos, certificados y categorías de skills SHALL exponer su texto por locale y SHALL mantener un identificador estable; los campos no lingüísticos (imagen, enlace, repositorio y stack) SHALL ser únicos y compartidos entre idiomas.

#### Scenario: Tarjeta de proyecto en inglés

- **WHEN** se muestra un proyecto en `/en`
- **THEN** el título y la descripción están en inglés y la imagen, el enlace y el stack son los mismos que en `/es`

#### Scenario: Iconos del stack

- **WHEN** se renderiza el stack de un proyecto en cualquier idioma
- **THEN** cada tecnología conserva su etiqueta original y su icono se resuelve correctamente

### Requirement: Fechas de certificados como texto por idioma

Las fechas de los certificados SHALL mostrarse con el formato textual propio de cada idioma, conservando el formato editorial actual.

#### Scenario: Fecha en español

- **WHEN** se muestra el certificado de SQL en `/es`
- **THEN** la fecha se lee `octubre 27 de 2026`

#### Scenario: Fecha en inglés

- **WHEN** se muestra el certificado de SQL en `/en`
- **THEN** la fecha se lee `October 27, 2026`

### Requirement: Integridad del contenido en primera persona

La traducción de la sección Sobre mí y de los seis logros de Experience SHALL conservar cifras, fechas, tecnologías, roles y afirmaciones del original; SHALL NOT introducir, eliminar, redondear ni suavizar datos.

#### Scenario: Cifras conservadas

- **WHEN** se revisa la versión inglesa de Sobre mí y de los logros
- **THEN** aparecen las mismas cifras del original: 40 %, 20–30 usuarios, 97 de Lighthouse, 2+ años, 40+ proyectos, año 2024 y los seis logros

#### Scenario: Afirmaciones conservadas

- **WHEN** se compara un logro en inglés con su original en español
- **THEN** la afirmación técnica y su resultado son equivalentes, sin nuevas promesas ni omisiones

### Requirement: Mensajes del formulario localizados

Etiquetas, placeholders, estado de envío, confirmación y mensajes de error del formulario de contacto SHALL mostrarse en el idioma activo.

#### Scenario: Error de validación en inglés

- **WHEN** un visitante en `/en` envía el formulario con un correo inválido
- **THEN** el mensaje de error se muestra en inglés

### Requirement: Contrato de error independiente del idioma

El API de contacto SHALL devolver un código estable por condición de error y el cliente SHALL traducir ese código, de modo que el servidor no dependa del idioma de la página.

#### Scenario: Correo inválido

- **WHEN** se envía una petición a `/api/contact` con un correo inválido
- **THEN** la respuesta incluye el código `INVALID_EMAIL` con estado 400

#### Scenario: Correo no configurado

- **WHEN** faltan las credenciales de correo en el servidor
- **THEN** la respuesta incluye el código `MAIL_NOT_CONFIGURED` con estado 500 y el cliente muestra un mensaje localizado

### Requirement: Correo transaccional en español

El correo que recibe el dueño del portafolio SHALL permanecer en español, independientemente del idioma del remitente.

#### Scenario: Envío desde la versión inglesa

- **WHEN** un visitante envía el formulario desde `/en`
- **THEN** el correo recibido conserva su asunto y cuerpo en español

### Requirement: Nombres propios y tecnologías sin traducir

Los nombres de proyectos, empresas, entidades certificadoras y tecnologías SHALL mantenerse idénticos en ambos idiomas; las etiquetas descriptivas como «Web» o «Móvil» SHALL traducirse.

#### Scenario: Nombre propio intacto

- **WHEN** se compara un proyecto en `/es` y `/en`
- **THEN** el nombre del proyecto y su stack no cambian

#### Scenario: Etiqueta descriptiva traducida

- **WHEN** se muestra un proyecto móvil en `/en`
- **THEN** la etiqueta de plataforma dice `Mobile` y en `/es` dice `Móvil`

### Requirement: Paridad de claves entre idiomas

Los archivos de mensajes de ambos idiomas SHALL tener el mismo conjunto de claves, de forma que una traducción incompleta se detecte antes de desplegar.

#### Scenario: Verificación de paridad

- **WHEN** se comparan los mensajes de `es` y `en`
- **THEN** no existe ninguna clave presente en un idioma y ausente en el otro
