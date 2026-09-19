# Design Document — Portafolio David Sliren

## 1. Identidad y principios de diseño

El portafolio adopta una estética **Dark Tech Minimalist** con acentos de
**glassmorphism** y **gradientes de luz azul**. El objetivo es transmitir
elegancia, precisión técnica y una experiencia fluida, evitando la frialdad
habitual de las interfaces técnicas.

Principios rectores:

- **Legibilidad en alto contraste:** textos claros sobre superficies oscuras.
- **Fluidez e intencionalidad:** micro-interacciones y animaciones breves guiadas
  por scroll, sin saturar al usuario.
- **Bifurcación responsiva deliberada:** la experiencia desktop (scroll horizontal
  en proyectos) es distinta de la móvil (scroll vertical), y no una mera
  adaptación de tamaños.
- **Contenido desacoplado:** todo el contenido editable vive en `src/constants/`,
  separado de la lógica de renderizado.

## 2. Fundamentos visuales

### 2.1 Paleta de colores

#### Superficies y fondo

| Token / uso                  | Valor          | Ubicación de uso                                    |
| ---------------------------- | -------------- | --------------------------------------------------- |
| Fondo principal              | `#121315`      | `App`/`Home`, `Navbar`, `Footer`                    |
| Fondo de formularios         | `#1b1c1e`      | Inputs y área de texto de `Form.jsx`                |
| Superficie de tarjetas       | `#1f2022`      | `CardSkill` (`bg-surface-container`)                |
| Fondo de banner/grid         | `#0f0f0f`/`#1a1a1a` | Clase `.container` (grid blueprint animado)   |

#### Escala Shark (grises neutros)

Definida como tokens en `@theme` de `src/index.css`:

```
shark-50:  #fafafa
shark-100: #f4f4f5
shark-200: #e4e5e7
shark-300: #d4d5d8
shark-400: #a2a4a9
shark-500: #727479
shark-600: #53555a
shark-700: #404245
shark-800: #27282a
shark-900: #1f2022
shark-950: #090a0b
```

#### Acento y gradiente principal

- Gradiente principal:
  `--background-image-gradient-blue: linear-gradient(125deg, #abc7ff, #0071e3)`.
  Genera la clase `bg-gradient-blue` usada en botones, títulos, nav activation y
  decoraciones.
- Acentos azules ambientales: `sky-400`, `sky-500`, con orbes difuminados en el
  Hero (`blur-[120px]`, `blur-[100px]`).
- Sombras de acento: `shadow-[#0071E3]/20`, `hover:shadow-sky-400/20`.

#### Textos (jerarquía cromática)

| Rol                    | Valor      | Uso                                                      |
| ---------------------- | ---------- | -------------------------------------------------------- |
| Alta jerarquía         | `#e3e2e4`  | Títulos, nombres, valores destacados (`text-on-surface`) |
| Cuerpo / subtítulos    | `#c1c6d6`  | Párrafos y descripciones (`text-on-surface-variant`)     |
| Secundario / metainfo  | `white/60` | Detalles dentro de tarjetas                              |
| Bordes                 | `#414753`  | Inputs, separadores (`border-outline-variant`, `white/20`, `white/10`) |

### 2.2 Tipografía y jerarquía

El proyecto define **roles tipográficos** usados de forma consistente:

- **Display / Headline** (`font-headline`): titulares editoriales grandes.
  - Héroes: `text-6xl md:text-8xl`, `font-extrabold`, `tracking-tighter`,
    `leading-[0.9]`.
  - Secciones: `text-4xl` a `text-5xl`, `font-bold`, `tracking-tight`.
- **Cuerpo** (`font-body`): párrafos largos, `font-light`/`font-normal`,
  `leading-relaxed`.
- **Etiqueta** (`font-label`): micro-etiquetas en mayúsculas,
  `text-[10px]`/`text-xs`, `uppercase`, `tracking-widest` o `tracking-[0.3em]`.
- **UI / Navegación** (`font-manrope`, `font-inter`): lazos del navbar y labels
  de formulario.

Convenciones de escala:

- Título de pantalla: 60–80px desktop → 36–48px móvil.
- Subtítulo/sección: 30–48px.
- Cuerpo: 16–20px.
- Etiquetas/metainfo: 10–12px mayúsculas.

### 2.3 Bordes, curvaturas y glassmorphism

- Curvaturas: `rounded-xl` (inputs y botones), `rounded-2xl` (tarjetas
  compactas), `rounded-3xl` (tarjetas grandes y skills), `rounded-full`
  (píldoras y avatares).
- Glassmorphism: superficies translúcidas con `backdrop-blur-xl` /
  `backdrop-blur-3xl`, bordes `border-white/10`–`white/25` y fondos
  `bg-white/5`, `bg-neutral-700/20`.
- Píldoras interactivas: `px-3 py-1.5` a `px-8 py-4`, `rounded-full`, con
  `tracking-widest` y `uppercase`.

## 3. Sistema de animación y micro-interacción

### 3.1 Scroll horizontal (desktop)

`src/Layout/HorizontalScroll.jsx` convierte scroll vertical en desplazamiento
horizontal mediante `useScroll` + `useTransform` de `motion/react`:

- Contenedor principal: `relative lg:h-[510vh]` (crea el recorrido de scroll).
- Cartel fijo: `lg:sticky lg:top-0` con `h-screen overflow-hidden`.
- Slide: `range => ["0vw", "-100vw"]` aplicado a `motion.div`.
- En pantallas menores a `lg`, el hook `isSmallDevice` anula el movimiento y se
  delega en el componente móvil (`ProjectsMobile`).

### 3.2 Animaciones guiadas por scroll (View Timeline)

En `@layer utilities` de `src/index.css`:

| Clase                         | Behavior (`animation-range`) |
| ----------------------------- | ---------------------------- |
| `animate-range-early-entry`   | `10% 40%`                    |
| `animate-range-flash-entry`   | `0% 30%`                     |
| `timeline-view`               | Activa la scroll-driven view |
| `animate-fill-mode-both`      | Rellena hacia adelante/atrás |

### 3.3 Keyframes y transiciones

- `@keyframes fadeBlur` → token `--animate-fade-blur`: entrada con `opacity`,
  `translateY` y `blur(30px)` (0.6s ease-in-out).
- `@keyframes backgroundAnimation`: anima el grid blueprint del fondo `.container`.
- Librería `tailwind-animations`:
  - `animate-jelly` (bloques de hover/feedback).
  - `animate-fade-in-up`, `animate-fade-in-down`, `animate-fade-in-right`
    (entradas de secciones y estados de contacto).
- Micro-interacciones de botones y tarjetas:
  - `hover:scale-105`, `active:scale-95`, `hover:animate-jelly`.
  - `hover:shadow-sky-400/20`, `transition-all duration-300`.
  - `group-hover:scale-110` (imágenes), `group-hover:translate-x-1` (flechas).

### 3.4 Iluminación ambiental

Orbes de luz difuminada para dar profundidad al Hero:
`bg-sky-500/60 blur-[120px]` (superior derecha) y `bg-sky-500/40 blur-[100px]`
(inferior izquierda), sobre el fondo base.

## 4. Anatomía de componentes

### 4.1 Navbar

- Fija superior (`fixed top-0 w-full z-50`) con `backdrop-blur-xl` y degradado
  de `#121315` a transparente; `mask-img-animate` en `animate-fade-in-down`.
- Logo + wordmark `Sliren.dev` con gradiente.
- Links de escritorio en `ul` oculta en móvil (`hidden md:flex`), con indicador
  de sección activa por hash: `bg-gradient-blue bg-clip-text text-transparent`.
- Botón CTA `Contacto` en píldora degradada (`hidden lg:block`).
- Drawer móvil animado con `motion.div layout` que alterna `h-fit opacity-100` /
  `h-0 opacity-0`.

### 4.2 Hero

- `min-h-screen` centrado verticalmente, fondo con orbes de luz.
- Badge editorial: línea `w-12 h-[1px] bg-gradient-blue` + etiqueta
  `Desarrollador Full Stack`.
- Título bicromático: `David` neutro + `Salazar` con `bg-clip-text` de gradiente.
- Propuesta de valor en `font-light` `leading-relaxed`.
- Botón primario `Ver Github` (con icono de enlace externo y flecha animada) y
  botón secundario `Descargar CV`.
- Indicador de scroll al pie con etiqueta `Scroll` y línea de gradiente animada
  (`animate-bounce`).

### 4.3 Experiencia

- Sección con cabecera `Experiencia` y subtítulo de contexto.
- `JobCard`: tarjeta `rounded-3xl` con `bg-shark-600/10` y bordes que se
  intensifican al hover.
  - Encabezado: icono terminal + rol `Desarrollador Full Stack`.
  - Metainfo: `Freelancer profesional` con icono de maletín.
  - Párrafo de trayectoria con stack técnico.
  - Bloque `Responsabilidades:` con lista de hitos `LuCircleCheck`.
  - Píldora temporal `2024 — Presente` en gradiente.

### 4.4 Habilidades

- Rejilla adaptativa `grid-cols-2 md:grid-cols-4 lg:grid-cols-6`.
- `CardSkill`:
  - Fondo `bg-surface-container`, `rounded-3xl`, centrado.
  - Icono vectorial 4xl que escala al hover.
  - Etiqueta `font-headline font-bold text-sm`.
  - Iconos resueltos desde `react-icons/si` y `react-icons/tb` mediante el mapa
    `SkillHash` (`src/constants/constantsIcons.js`).

### 4.5 Proyectos

Existen dos vistas coordinadas por breakpoint:

- **Desktop** — `Projects.jsx` envuelto por `HorizontalScroll` (scroll lateral).
- **Móvil** — `ProjectsMobile.jsx` (`block md:hidden`), scroll vertical con
  `snap-x snap-mandatory`.

`ProjectCard` compartido:

- Imagen `aspect-video` desktop / `aspect-auto` móvil, `object-cover`, zoom al
  hover (`group-hover:scale-110`).
- Overlay de gradiente inferior (`from-black/90 via-black/20`).
- Panel informativo glassmorphism: título `font-headline text-2xl`, descripción
  truncada, píldora de plataforma `Web`/`Móvil`.
- Hover (desktop): overlay `bg-black/40 backdrop-blur-xl` con botón `Ver proyecto`
  y grid de iconos del stack (5 columnas, hasta 5 filas).

### 4.6 Certificaciones

- Cabecera con etiqueta `Validación Técnica`, título `Certificaciones
  Profesionales` y subtítulo de acreditación.
- Bento Grid `sm:grid-cols-6 lg:grid-cols-12`; cada tarjeta ocupa
  `sm:col-span-3 lg:col-span-4`.
- `CertificateCard`: fondo con `bg-gradient-blue rounded-xl`,
  `brightness-85 hover:scale-105`, imagen `size-full object-cover object-top` en
  contenedor `h-20 rounded-lg`.
- Metainfo inferior: institución (`place`) y fecha (`date`) en etiquetas
  `uppercase tracking-widest`, separadas por `hr`.
- Al hover (desktop): overlay con botón `Ver certificado`.

### 4.7 Sobre Mí

- Layout asimétrico `lg:grid-cols-12`: texto (8 cols) + foto (4 cols).
- Título `Sobre mí.` con acento gradiente.
- Texto biográfico en `text-stone-300/85` `text-lg` `font-body`.
- Contadores de impacto: `2+ Años de experiencia` y `40+ Proyectos`,
  separados por línea de gradiente `w-px h-10 bg-gradient-blue`.
- Foto de perfil circular `rounded-full` con `mask-img-animate` (animada por
  máscara) e `object-top`.

### 4.8 Contacto

- Cabecera `CONSTRUYAMOS ALGO IMPRESIONANTE` con acento gradiente y texto en
  `#c1c6d6`.
- `Form.jsx`: estado inicial.
  - Inputs `bg-[#1b1c1e]`, borde `#414753/20`, foco con anillo
    `#0071E3` (`focus:border-[#0071E3] focus:ring-1`).
  - Labels tipográficos `text-[10px] uppercase tracking-widest`.
  - Envío mediante EmailJS (`api.emailjs.com`) con `FormData`.
  - Botón `Enviar Correo` full-width degradado, `hover:animate-jelly`.
- `InfoCard.jsx`: estado post-envío (transición `animate-fade-in-down`).
  - Check `LuCircleCheck` gigante con `animate-jelly` en `text-blue-400/90`.
  - Mensaje de confirmación y botón `Enviar otro correo` que restablece el
    formulario.

### 4.9 Footer

- `border-t border-[#414753]/15`, fondo `#121315`.
- Wordmark `Sliren.dev`.
- Copyright `© 2025 David Sliren.` con la nota humorística
  `Casi todos los derechos reservados.`.
- Iconos sociales (LinkedIn, GitHub, Twitter) resueltos desde
  `react-icons/lu`; hover `text-sky-400`.

## 5. Directrices responsivas

Breakpoints de Tailwind utilizados:

| Prefijo | Tamaño    | Comportamiento clave                              |
| ------- | --------- | ------------------------------------------------- |
| `sm`    | ≥ 640px   | Tarjetas de proyecto `aspect-[16/10]`, bento grid |
| `md`    | ≥ 768px   | Navbar de escritorio, scroll horizontal, formulario en 2 columnas |
| `lg`    | ≥ 1024px  | Scroll horizontal activo, CTA visible, foto en About |
| `xl`    | ≥ 1280px  | Espaciados de grid ampliados                      |

Reglas generales:

- Elementos display se alternan con `hidden md:block` / `hidden lg:block`.
- En móvil, una sola columna y navegación en drawer; en desktop, columnas y
  scroll horizontal.
- El scroll vertical móvil de proyectos usa `snap-x snap-mandatory` con tarjetas
  a ancho de pantalla (`w-[85vw]`).

## 6. Mantenimiento y extensión

### 6.1 Agregar un proyecto

En `src/constants/docsProjects.js`:

1. Añadir el objeto en la parte **superior** del arreglo: la utilidad `utils`
   revierte el orden de imágenes para alinearlas con el patrón de archivos.
2. Usar la clave `descripcion` y el campo `platform` en `Web`/`Móvil`.
3. El campo `stack` debe usar **exactamente** las mismas claves definidas en
   `constantsIcons.js`, porque `SkillHash` resuelve cada icono por esa etiqueta
   (si la clave no existe, la tarjeta mostrará `error`).

### 6.2 Mapear una tecnología

En `src/constants/constantsIcons.js`, `SkillsIcons`:

- `iconName` es el nombre del componente en `react-icons/si` o `react-icons/tb`.
- `label` es la llave visible y la usada por `SkillHash`.
- Mantener la duplicación `React`/`React-Native` y `React-Router` como etiquetas
  únicas para que el hash no colisione.

### 6.3 Coherencia global

- No añadir colores arbitrarios fuera de la paleta; si es necesario, definir el
  token en `@theme` de `src/index.css`.
- Respetar la jerarquía tipográfica por roles (`font-headline`, `font-body`,
  `font-label`).
- Las animaciones de entrada se anidan con `timeline-view` +
  `animate-range-*` + `animate-fill-mode-both`.
- Al agregar contenido de texto, mantener las tildes y el tono en español
  (ver `AGENTS.md`).