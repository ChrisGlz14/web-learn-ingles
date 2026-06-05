# Guía de Tiempos Verbales en Inglés 🇬🇧

Guía completa e interactiva de los **12 tiempos verbales del inglés**: usos, fórmulas (afirmativa, negativa e interrogativa), ejemplos traducidos, palabras clave y un **conjugador de verbos**.

## 📂 Estructura

```
index.html    → estructura de la página
styles.css    → estilos
script.js     → datos de los tiempos + interactividad
```

Los tres archivos deben estar en la **misma carpeta** (las rutas son relativas).

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube estos tres archivos (`index.html`, `styles.css`, `script.js`).
2. En el repo, ve a **Settings → Pages**.
3. En **Source**, elige la rama `main` y la carpeta `/ (root)`. Guarda.
4. Espera ~1 minuto. Tu sitio quedará publicado en:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

## 💻 Ver en local

Solo abre `index.html` en tu navegador (doble clic). No requiere servidor.

## ✏️ Personalizar

- Para **añadir o editar tiempos**, modifica el arreglo `TENSES` al inicio de `script.js`.
- Para **agregar verbos** al conjugador, amplía el arreglo `VERBS` (con sus formas: `base`, `s`, `ing`, `past`, `pp`).
