# Hybridge Blog API 🚀

API RESTful desarrollada con **Node.js** y **Express** para la gestión de publicaciones de un blog. Proyecto creado como parte de la materia **Desarrollo Back-End** (6to Cuatrimestre - Hybridge).

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Variables de Entorno](#-variables-de-entorno)
- [Ejecución del Proyecto](#-ejecución-del-proyecto)
- [Documentación de la API (Endpoints)](#-documentación-de-la-api-endpoints)
  - [1. Mensaje de Bienvenida](#1-mensaje-de-bienvenida)
  - [2. Obtener todos los Posts](#2-obtener-todos-los-posts)
  - [3. Crear un nuevo Post](#3-crear-un-nuevo-post)
- [Pruebas de la API](#-pruebas-de-la-api)
- [Conceptos Clave de Back-End Aplicados](#-conceptos-clave-de-back-end-aplicados)
- [Licencia](#-licencia)

---

## 📖 Descripción General

Este proyecto consiste en un servicio Back-End con arquitectura REST que permite consultar y publicar artículos de blog almacenados en memoria. Sirve como base para comprender los conceptos esenciales del desarrollo web del lado del servidor: manejo del protocolo HTTP, enrutamiento, middlewares, variables de entorno y modularización de código en Node.js.

---

## 🛠️ Tecnologías Utilizadas

- **[Node.js](https://nodejs.org/)**: Entorno de ejecución de JavaScript en el servidor.
- **[Express.js](https://expressjs.com/)**: Framework web minimalista y flexible para Node.js.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Carga de variables de entorno desde un archivo `.env`.
- **[nodemon](https://nodemon.io/)**: Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios en el código.

---

## 📂 Estructura del Proyecto

```text
hybridge-blog-api/
├── .env.example        # Plantilla de variables de entorno
├── .gitignore          # Archivos y carpetas ignorados por Git
├── index.js            # Punto de entrada de la aplicación y configuración de rutas
├── package.json        # Manifiesto de dependencias y scripts de npm
├── package-lock.json   # Registro exacto del árbol de dependencias
├── posts.js            # Módulo de almacenamiento y datos de prueba en memoria
└── README.md           # Documentación principal del repositorio
```

---

## 💻 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

- **Node.js** (v18.0.0 o superior recomendada)
- **npm** (administrador de paquetes de Node)
- **Git**

Para verificar tu instalación, ejecuta en la terminal:
```bash
node -v
npm -v
git --version
```

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/hybridge-blog-api.git
   cd hybridge-blog-api
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`:
   ```bash
   # En Windows PowerShell
   Copy-Item .env.example .env

   # En Linux / macOS / Bash
   cp .env.example .env
   ```

---

## 🔐 Variables de Entorno

El archivo `.env` permite configurar parámetros sensibles o específicos del entorno sin exponerlos en el control de versiones:

| Variable | Tipo | Valor por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `PORT` | Número | `3000` | Puerto en el que escucha el servidor HTTP |

---

## ▶️ Ejecución del Proyecto

En el archivo `package.json` se encuentran configurados los siguientes comandos:

- **Modo Desarrollo (con recarga automática):**
  ```bash
  npm run dev
  ```
- **Modo Producción:**
  ```bash
  npm start
  ```

Una vez iniciado, el servidor estará escuchando en:
`http://localhost:3000`

---

## 📡 Documentación de la API (Endpoints)

### 1. Mensaje de Bienvenida

Comprueba que el servidor está en funcionamiento.

- **Método:** `GET`
- **Ruta:** `/`
- **Respuesta Exitosa (200 OK):**
  ```json
  {
    "message": "Bienvenido a la API de Hybridge Blog Posts"
  }
  ```

---

### 2. Obtener todos los Posts

Devuelve la lista completa de artículos publicados.

- **Método:** `GET`
- **Ruta:** `/api/posts`
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 1,
      "title": "Primer post",
      "content": "Contenido del primer post",
      "author": "Admin",
      "date": "2026-10-10T10:23:00.000Z"
    },
    {
      "id": 2,
      "title": "Segundo post",
      "content": "Contenido del segundo post",
      "author": "Admin",
      "date": "2026-10-10T10:23:00.000Z"
    }
  ]
  ```

---

### 3. Crear un nuevo Post

Agrega un nuevo artículo al registro en memoria.

- **Método:** `POST`
- **Ruta:** `/api/posts`
- **Headers:** `Content-Type: application/json`
- **Cuerpo de la Petición (Body JSON):**
  ```json
  {
    "title": "Aprendiendo Node y Express",
    "content": "Este es el contenido de mi nueva publicación en Hybridge.",
    "author": "Estudiante"
  }
  ```
- **Respuesta Exitosa (201 Created):**
  ```json
  {
    "id": 3,
    "title": "Aprendiendo Node y Express",
    "content": "Este es el contenido de mi nueva publicación en Hybridge.",
    "author": "Estudiante",
    "date": "2026-10-10T10:45:00.000Z"
  }
  ```
- **Respuesta con Error (400 Bad Request):**
  ```json
  {
    "error": "Todos los campos son requeridos: title, content, author"
  }
  ```

---

## 🧪 Pruebas de la API

Puedes probar los endpoints usando herramientas como **Postman**, **Thunder Client** (extensión de VS Code) o directamente desde la terminal con `cURL`:

### Consultar posts (PowerShell / Bash):
```bash
curl http://localhost:3000/api/posts
```

### Crear un post (cURL):
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Mi Primer Post\",\"content\":\"Hola mundo desde Node.js\",\"author\":\"Dev\"}"
```

---

## 💡 Conceptos Clave de Back-End Aplicados

1. **Modularización (`require` / `module.exports`):**
   En Node.js (CommonJS), separamos responsabilidades dividiendo el código en módulos. En este proyecto, `posts.js` exporta los datos y `index.js` los importa mediante `const posts = require('./posts')`.
2. **Middleware (`app.use(express.json())`):**
   Un middleware es una función que intercepta la petición antes de que llegue a las rutas. `express.json()` se encarga de convertir el cuerpo de las peticiones HTTP que vienen en texto plano a un objeto JavaScript accesible en `req.body`.
3. **Códigos de Estado HTTP (Status Codes):**
   - `200 OK`: Petición procesada exitosamente.
   - `201 Created`: Recurso creado exitosamente.
   - `400 Bad Request`: Petición con datos faltantes o inválidos.
4. **Control de Versiones y `.gitignore`:**
   La carpeta `node_modules` no se sube a GitHub porque contiene miles de archivos dependientes del sistema operativo que pueden reinstalarse limpiamente con `npm install`.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **ISC**.