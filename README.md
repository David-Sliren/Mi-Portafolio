# Sliren.dev — Portafolio Personal

Portafolio web profesional de David Salazar, Desarrollador Full Stack. Construido con [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript y Tailwind CSS.

## Características

- ⚡ **Next.js 16 App Router & Turbopack** para un renderizado y desarrollo ultra rápido.
- 🎨 **Tailwind CSS & Motion (Framer Motion)** para estilos modernos y animaciones fluidas.
- 📱 **Diseño 100% responsivo**, adaptado para móviles, tablets y pantallas de escritorio.
- 📬 **Formulario de contacto interactivo** integrado con EmailJS.
- 📜 **Estructura modular en TypeScript** con tipado estático ligero y componentes desacoplados.

## Comenzar

1. Instalar dependencias con `pnpm`:

```bash
pnpm install
```

2. Configurar variables de entorno en `.env`:

```env
NEXT_PUBLIC_EMAIL_USER_ID=tu_user_id
NEXT_PUBLIC_EMAIL_SERVICES_ID=tu_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=tu_template_id
```

3. Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Scripts Disponibles

- `pnpm dev` — Inicia el entorno de desarrollo con Turbopack.
- `pnpm build` — Compila la aplicación y genera el bundle de producción en `.next/`.
- `pnpm start` — Inicia el servidor de producción.
- `pnpm lint` — Ejecuta ESLint para verificar el estilo y sintaxis del código.
