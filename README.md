# Mi Portafolio

Este proyecto es un portafolio web personal desarrollado con **React** y **Vite**, diseñado para mostrar experiencia profesional, habilidades, proyectos y certificaciones de una manera moderna y responsiva.

## 🚀 Tecnologías Utilizadas

El proyecto utiliza un stack moderno de desarrollo frontend:

*   **[React 19](https://react.dev/)**: Biblioteca principal para la interfaz de usuario.
*   **[Vite](https://vitejs.dev/)**: Entorno de desarrollo rápido y herramienta de construcción.
*   **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework de CSS para estilos rápidos y responsivos.
*   **[Motion](https://motion.dev/)** (anteriormente Framer Motion): Para animaciones fluidas en la interfaz.
*   **[Lucide React](https://lucide.dev/)**: Colección de iconos ligeros y consistentes.
*   **[ESLint](https://eslint.org/)**: Para asegurar la calidad y consistencia del código.

## 📂 Estructura del Proyecto

La estructura de carpetas está organizada de la siguiente manera:

```text
src/
├── assets/          # Imágenes e iconos (SVG, WebP)
├── components/      # Componentes de React reutilizables y secciones
│   ├── 001 Plantillas/  # Componentes UI base (Cards, Botones, etc.)
│   ├── about me/        # Sección "Sobre Mí"
│   ├── Certificates/    # Sección de Certificados
│   ├── Experience/      # Sección de Experiencia
│   ├── Presentation/    # Sección de Presentación/Header
│   ├── Proyects/        # Sección de Proyectos
│   └── Skills/          # Sección de Habilidades
├── constants/       # Datos estáticos para alimentar los componentes (JSON/JS Objects)
├── pages/           # Páginas principales (Home.jsx)
└── App.jsx          # Componente raíz
```

## 🛠️ Instalación y Configuración

Este proyecto utiliza `pnpm` como gestor de paquetes (basado en el archivo `pnpm-lock.yaml`).

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Mi-Portafolio
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```
    *Si no tienes pnpm instalado, puedes instalarlo globalmente con `npm install -g pnpm` o usar `npm install` si prefieres npm.*

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 📜 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts:

*   `pnpm dev`: Inicia el entorno de desarrollo local.
*   `pnpm build`: Compila la aplicación para producción en la carpeta `dist`.
*   `pnpm preview`: Vista previa local de la build de producción.
*   `pnpm lint`: Ejecuta ESLint para buscar errores en el código.
*   `pnpm deploy`: Despliega la aplicación en GitHub Pages (requiere configuración previa del repo remoto).

## 📝 Gestión de Contenido

El contenido del portafolio se gestiona principalmente a través de archivos en la carpeta `src/constants/`. Esto permite actualizar la información sin modificar la lógica de los componentes.

*   `docsProjects.js`: Añadir o editar proyectos.
*   `docsExperiencie.js`: Actualizar experiencia laboral.
*   `docsCertificate.js`: Gestionar certificaciones mostradas.
*   `constantsIcons.js`: Configuración de iconos.

## 🌍 Despliegue

El proyecto está configurado para desplegarse fácilmente en **GitHub Pages** usando el paquete `gh-pages`.

Para desplegar una nueva versión:
```bash
pnpm run deploy
```
Esto ejecutará primero el build y luego subirá el contenido de la carpeta `dist` a la rama `gh-pages` de tu repositorio.

## 👤 Autor

Desarrollado por **David Sliren**.