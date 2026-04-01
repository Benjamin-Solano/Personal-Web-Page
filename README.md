# Benjamín Solano — Portfolio

Portfolio personal desarrollado con React, Vite, Framer Motion y Tailwind CSS.

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Vista previa de producción
npm run preview
```

## Stack

| Tecnología       | Versión   | Propósito                         |
|------------------|-----------|-----------------------------------|
| React            | ^18.3     | UI framework                      |
| Vite             | ^5.4      | Build tool y dev server           |
| Framer Motion    | ^11.3     | Animaciones y transiciones        |
| Tailwind CSS     | ^3.4      | Estilos utilitarios               |
| DM Mono          | Google Fonts | Tipografía cuerpo (monospace)  |
| Bebas Neue       | Google Fonts | Tipografía display               |

## Estructura del proyecto

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js     ← Editar contenido aquí
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        └── Contact.jsx
```

## Personalización

Toda la información del portfolio (nombre, experiencia, skills, etc.) está centralizada en:

```
src/data/portfolioData.js
```

Editar ese archivo es suficiente para actualizar todo el contenido.

## Deploy

El proyecto puede deployarse en **Vercel** o **Netlify** de forma gratuita:

- **Vercel**: Conectar el repositorio GitHub y Vercel detecta Vite automáticamente.
- **Netlify**: `npm run build` → subir la carpeta `dist/`.
