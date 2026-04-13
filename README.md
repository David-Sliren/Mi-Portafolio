# Portafolio Personal

Este proyecto es un portafolio web personal desarrollado con **React** y **Vite**, diseñado para presentar experiencia profesional, habilidades, proyectos y certificaciones mediante una interfaz moderna, fluida y altamente responsiva.

## 🚀 Tecnologías Principales

El proyecto se fundamenta en un stack tecnológico moderno:

*   **[React 19](https://react.dev/)**: Interfaz de usuario basada en componentes.
*   **[Vite](https://vitejs.dev/)**: Herramienta de construcción y entorno de desarrollo optimizado.
*   **[Tailwind CSS 4](https://tailwindcss.com/)**: Estilos utility-first para un diseño ágil.
*   **[Motion](https://motion.dev/)**: Animaciones declarativas y fluidas.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: Colección estandarizada de iconos.

## 📂 Estructura del Proyecto

El código está organizado de forma modular para facilitar su mantenimiento y escalabilidad:

```text
src/
├── assets/          # Imágenes (WebP) y recursos estáticos
├── components/      # Componentes UI reutilizables y secciones del sitio
├── constants/       # Datos maestros para contenido dinámico
├── Layout/          # Componentes de layout y wrappers (HorizontalScroll)
├── pages/           # Vistas de alto nivel (Home.jsx)
├── utils/           # Funciones de utilidad auxiliares
└── App.jsx          # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Desarrollo

Este proyecto utiliza `pnpm` como gestor de paquetes.

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd Mi-Portafolio
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Desarrollo:**
    ```bash
    pnpm dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 📜 Scripts Disponibles

*   `pnpm dev`: Inicia el entorno de desarrollo local.
*   `pnpm build`: Genera los archivos optimizados para producción en `/dist`.
*   `pnpm preview`: Previsualización local del build de producción.
*   `pnpm lint`: Ejecuta el análisis estático de código mediante ESLint.

## 📝 Gestión de Contenido

El contenido del portafolio se gestiona de forma desacoplada en la carpeta `src/constants/`, permitiendo actualizaciones rápidas sin modificar la lógica de los componentes:

*   `docsProjects.js`: Catálogo de proyectos.
*   `docsCertificate.js`: Certificaciones profesionales.
*   `constantsIcons.js`: Mapeo de iconos y assets.