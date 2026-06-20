# Santiago de Pablo Arquitectura — Web

Web del estudio, construida con [Astro](https://astro.build). Rápida, bilingüe (ES/EN)
y pensada para que añadir proyectos e imágenes sea muy sencillo.

## Poner en marcha en local

```bash
npm install      # instala dependencias (solo la primera vez)
npm run dev      # arranca el servidor de desarrollo en http://localhost:4321
```

Mientras `npm run dev` está en marcha, cualquier cambio que guardes se ve al instante en el navegador.

Para generar la versión final (lo que se publica):

```bash
npm run build    # crea la carpeta dist/
npm run preview  # previsualiza la versión final
```

## Estructura

```
src/
├── data/
│   ├── projects.ts   ← TUS PROYECTOS (edita aquí)
│   └── site.ts       ← datos del estudio, textos, servicios, contacto
├── i18n/ui.ts        ← textos de menús y botones (ES/EN)
├── components/       ← piezas reutilizables (cabecera, tarjetas, etc.)
├── layouts/          ← plantilla base de todas las páginas
└── pages/            ← páginas (es/ y en/)
public/
└── proyectos/        ← aquí van las fotos reales de cada proyecto
```

## Cómo añadir o editar un proyecto

1. Abre `src/data/projects.ts`.
2. Copia un bloque de proyecto y cámbialo (título, año, localización, textos…).
   Todos los textos tienen versión `es` y `en`.
3. Para las fotos: crea una carpeta `public/proyectos/<slug>/` y mete ahí las imágenes.
   Luego referencia las rutas en el campo `images`, por ejemplo:

   ```ts
   images: [
     '/proyectos/casa-entre-encinas/01.jpg',
     '/proyectos/casa-entre-encinas/02.jpg',
   ],
   ```

Mientras un proyecto no tenga fotos, la web muestra automáticamente un fondo
cálido con el nombre del proyecto, para que todo se vea completo.

## Publicar en Netlify

1. Sube el repositorio a GitHub (rama ya configurada).
2. En [netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Elige el repositorio. Netlify detecta la configuración de `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**. En un par de minutos tendrás una URL pública (p. ej. `sdparquitectura.netlify.app`).

Cada vez que se haga push a la rama, Netlify reconstruye y publica solo. ✨

> Nota: los proyectos incluidos ahora son de EJEMPLO. Sustitúyelos por los reales
> en `src/data/projects.ts` y añade las imágenes en `public/proyectos/`.
