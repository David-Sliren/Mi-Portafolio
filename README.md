# Sliren.dev — Portafolio Personal

Portafolio web profesional de **David Salazar (Sliren.dev)**, Desarrollador Full Stack Multiplataforma. Construido con arquitectura moderna sobre **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

---

## 🚀 Tecnologías Principales

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Biblioteca de UI:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) & [tailwind-animations](https://github.com/)
- **Animaciones:** [Motion](https://motion.dev/) (Framer Motion v12)
- **Iconografía:** [React Icons](https://react-icons.github.io/react-icons/)
- **Servidor de Correos:** [Nodemailer](https://nodemailer.com/) & [React Email](https://react.email/)
- **Analíticas:** [@vercel/analytics](https://vercel.com/analytics)
- **Gestor de paquetes:** [pnpm](https://pnpm.io/)

---

## ✨ Características

- ⚡ **Rendimiento Ultrarrápido:** Arquitectura basada en Next.js App Router y Turbopack para compilación y renderizado instantáneo.
- 📱 **Diseño 100% Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets y monitores ultrawide.
- 🎨 **Estética Moderna y Minimalista:** Tema oscuro premium (#121315) con efectos blur, transiciones suaves y tipografía optimizada (Inter y Manrope de Google Fonts).
- 📬 **Formulario de Contacto Funcional:** API propia (`/api/contact`) con Nodemailer y plantillas responsivas en React Email siguiendo la guía visual del proyecto.
- 📜 **Estructura Modular & Escalable:** Separación clara de datos y presentación; el contenido reside en `src/constants/` y los componentes son reutilizables y desacoplados.

---

## 🔍 Optimización SEO y Estándares Web

El proyecto integra mejores prácticas de Search Engine Optimization (SEO) técnico y on-page:

- **Metadata API Nativa:** Configuración de `metadataBase`, títulos dinámicos con plantillas, descripciones precisas y palabras clave en `src/app/layout.tsx`.
- **Open Graph & Twitter Cards:** Previsualizaciones atractivas y tarjetas de resumen enriquecidas al compartir enlaces en redes sociales y aplicaciones de mensajería.
- **Rastreo e Indexación:**
  - `src/app/robots.ts` genera `/robots.txt` dinámicamente con reglas explícitas para crawlers.
  - `src/app/sitemap.ts` genera `/sitemap.xml` para indexación ágil de páginas canónicas.
- **Datos Estructurados (JSON-LD):** Esquemas de [Schema.org](https://schema.org) para `Person` (perfil profesional, redes, habilidades) y `WebSite`, facilitando la aparición de Rich Snippets en Google Search.
- **Accesibilidad y Semántica:** Estructura de encabezados (`h1`, `h2`), etiquetas `alt` en imágenes y enlaces con atributos de seguridad (`rel="noopener noreferrer"`).

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── .agents/              # Habilidades y agentes de asistencia
├── public/               # Recursos estáticos servidos directamente
├── src/
│   ├── app/              # Next.js App Router (layout, páginas, robots, sitemap, API)
│   │   ├── (home)/       # Ruta raíz principal
│   │   ├── api/          # Route Handlers del backend
│   │   │   └── contact/  # Endpoint de envío de correo (/api/contact)
│   │   ├── layout.tsx    # Root layout con fuentes, metadata y JSON-LD
│   │   ├── robots.ts     # Generador dinámico de robots.txt
│   │   └── sitemap.ts    # Generador dinámico de sitemap.xml
│   ├── assets/           # Imágenes y logos importados en componentes
│   ├── components/       # Secciones y componentes modulares de UI
│   │   ├── aboutMe/      # Sección Sobre Mí
│   │   ├── Certificates/ # Sección de Certificaciones
│   │   ├── Contact/      # Formulario y métodos de contacto
│   │   ├── emails/       # Plantillas de correo con React Email (ContactEmail)
│   │   ├── Experience/   # Trayectoria y experiencia
│   │   ├── Hero/         # Portada de bienvenida
│   │   ├── Projects/     # Proyectos destacados (Desktop y Mobile)
│   │   ├── Skills/       # Tecnologías y habilidades
│   │   └── ui/           # Navbar, Footer y componentes comunes
│   ├── constants/        # Datos tipados (proyectos, certificados, iconos)
│   ├── Layout/           # Envoltorios de layout de página
│   └── utils/            # Funciones de utilidad auxiliares
├── AGENTS.md             # Guía de convenciones y directrices para agentes
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

---

## 🛠️ Comenzar en Local

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)
- [pnpm](https://pnpm.io/) (`corepack enable && corepack prepare pnpm@latest --activate`)

### 1. Clonar e Instalar

```bash
git clone https://github.com/David-Sliren/portfolio.git
cd portfolio
pnpm install
```

### 2. Configurar Variables de Entorno

Copia las variables de entorno necesarias creando un archivo `.env` en la raíz:

```env
# URL canónica del sitio (utilizada para metadata y sitemap)
NEXT_PUBLIC_SITE_URL=https://slirendev.vercel.app

# Servidor de Correo (Nodemailer & React Email)
GMAIL_USER=tu_correo@gmail.com
GMAIL_APP_PASSWORD=tu_contraseña_de_aplicacion_google
```

### 3. Ejecutar Servidor de Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 📋 Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el entorno de desarrollo con soporte de Turbopack. |
| `pnpm build` | Compila la aplicación y genera el bundle optimizado para producción. |
| `pnpm start` | Inicia el servidor de producción con la compilación de `.next/`. |
| `pnpm lint` | Ejecuta ESLint para validar sintaxis y estilos del código. |

---

## 🚢 Despliegue

La forma recomendada de desplegar este proyecto es a través de la plataforma [Vercel](https://vercel.com/):

1. Conecta el repositorio en el panel de Vercel.
2. Vercel detectará automáticamente Next.js.
3. Agrega las variables de entorno (`NEXT_PUBLIC_SITE_URL`, `GMAIL_USER`, `GMAIL_APP_PASSWORD`).
4. Haz clic en **Deploy**.

---

## 👤 Autor

**David Salazar (Sliren)**
- Web: [slirendev.vercel.app](https://slirendev.vercel.app)
- GitHub: [@David-Sliren](https://github.com/David-Sliren)
- LinkedIn: [David Salazar](https://www.linkedin.com/in/davidsliren/)
- X (Twitter): [@slirendev](https://x.com/slirendev)

---

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
