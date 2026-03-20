# Hydrodata

Frontend para el desafío **Hackathon Repte 3**.  
Este proyecto está desarrollado con **TypeScript** y **Vite**, con soporte de herramientas de linting y formateo para mantener un código limpio y consistente.

---

## 📁 Estructura del proyecto

├── public/
├── src/
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

- `public/` → archivos estáticos (imágenes, íconos, etc.)
- `src/` → código fuente principal del frontend
- `index.html` → punto de entrada HTML
- Archivos de configuración → ESLint, Prettier, TypeScript y Vite

---

## 🛠️ Tecnologías utilizadas

- **TypeScript**
- **Vite**
- **CSS**
- **ESLint / Prettier**
- Dependencias adicionales (ver `package.json`)

---

## 🚀 Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

https://github.com/JlBestMc/HackathonRepte3_Frontend.git

2. **Cambiar nombre de archivo .env.test por .env y añadir API keys de Supabase**

3. **Instalar las dependencias:**

Instalar las dependencias:

npm install

4. **Iniciar el servidor de desarrollo:**

npm run dev

5. **Compilar para producción:**

npm run build

⚙️ Estructura y funcionamiento

El frontend está organizado en módulos dentro de src/.
Algunos puntos clave a documentar (puedes completarlos según tu proyecto):

/src/components → componentes reutilizables (botones, formularios, tarjetas, etc.)

/src/pages → vistas principales de la aplicación

/src/services → lógica de comunicación con el backend (APIs)

/src/styles → estilos globales y utilidades CSS

Si el proyecto se conecta a una API o backend, puedes describir aquí las rutas o endpoints principales, por ejemplo:

GET /api/users → obtiene la lista de usuarios

POST /api/login → autentica un usuario

💡 Scripts disponibles

En el archivo package.json encontrarás los siguientes scripts:

Script Descripción
npm run dev Ejecuta el servidor de desarrollo
npm run build Compila la aplicación para producción
npm run preview Vista previa del build de producción
npm run lint Ejecuta ESLint para verificar el código

BackEnd Repository
Here is the backend repository: https://github.com/acocinas/HackatoRepte3.git

🧑‍🔧 Team Authors
Alfonso Cocinas -> https://github.com/acocinas

Toni Romero -> https://github.com/ToniR90

Isaac Díez -> https://github.com/isaac-diez

Jesús Grávalos -> https://github.com/jgravalo

Juan Luis Rodríguez -> https://github.com/JlBestMc

Antonio Felices -> https://github.com/antoniofelices

Omar Salvat -> https://github.com/omarsaou
