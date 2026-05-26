# A&E Ingeniería · Obras Civiles

Sitio institucional estático para **A&E Ingeniería Obras Civiles**.
Construido con **Vite + React + TypeScript + Framer Motion**.

Compatible tanto con **GitHub Pages** como con **S3 + CloudFront** —
el output es 100% estático y no requiere servidor.

---

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build de producción

```bash
npm run build        # genera dist/
npm run preview      # sirve dist/ localmente para validar
```

El build local usa `base="/"`. Para forzar una base distinta:

```bash
VITE_BASE_PATH=/ayeingenieriaobrasciviles/ npm run build
```

---

## Despliegue

### Opción A — GitHub Pages (automático)

Cada push a `main` dispara `.github/workflows/deploy.yml`, que:

1. Hace `npm ci` y `npm run build` con
   `VITE_BASE_PATH=/ayeingenieriaobrasciviles/`.
2. Añade `.nojekyll` al artefacto.
3. Publica `dist/` en GitHub Pages.

**Configuración inicial (una vez):**

1. En el repo de GitHub → **Settings → Pages**.
2. En *Build and deployment* elige **Source: GitHub Actions**.
3. Haz `git push` y espera a que el workflow termine.

El sitio queda en
`https://sebastian-ardila.github.io/ayeingenieriaobrasciviles/`.

### Opción B — S3 + CloudFront

```bash
# Build con base raíz (S3 sirve desde la raíz del bucket / dominio)
VITE_BASE_PATH=/ npm run build

# Subir
aws s3 sync dist/ s3://TU-BUCKET/ --delete

# Invalidar CloudFront
aws cloudfront create-invalidation \
  --distribution-id TU-DISTRIBUTION-ID \
  --paths "/*"
```

**Configuración recomendada del bucket:**

- *Static website hosting*: index document = `index.html`
- *Error document*: `index.html` (para que la SPA maneje rutas no encontradas)
- En CloudFront: *Default root object* = `index.html`
- *Cache behavior*: comprimir + cache largo para `/assets/*` (archivos
  hasheados por Vite); cache corto/nulo para `index.html`.

---

## Estructura

```
.
├── index.html                 Entry HTML (consumido por Vite)
├── vite.config.ts             Config (base path, code splitting)
├── package.json
├── tsconfig*.json
├── public/                    Assets estáticos servidos en raíz
│   ├── aye0.webp              Logo
│   ├── aye0.png               Logo original (fuente, no usado en runtime)
│   ├── aye1.webp              Movimiento de tierras
│   ├── aye2.webp              Cimentación
│   └── aye3.webp              Reservorio / tanque
├── src/
│   ├── main.tsx               Entry React + Router
│   ├── App.tsx                Composición de la página
│   ├── components/            Nav, Hero, Marquee, Identidad, ...
│   ├── utils/asset.ts         Resuelve URLs según el base path
│   ├── styles/global.css      Sistema visual completo
│   └── vite-env.d.ts
└── .github/workflows/deploy.yml   Build + deploy a GH Pages
```

---

## Sistema de diseño

- **Tipografía**: Fraunces (display serif, variable axes opsz/SOFT),
  Geist (body sans), JetBrains Mono (etiquetas técnicas).
- **Paleta**:
  - Fondo `#0E0A06` (tierra oscura cálida)
  - Tinta `#F4ECDE` (crema)
  - Acento `#D26A2E` (terracota — tierra roja colombiana)
  - Secundario `#7FA4B5` (azul agua, tomado del logo)
- **Movimiento**: Framer Motion con curvas custom
  `cubic-bezier(.7, 0, .15, 1)`. Veil de entrada con paneles staggered,
  reveals al scroll con `mask`, `clip`, `up`, `row`.

---

## Próximos pasos (cuando el proyecto crezca)

- Página `/proyectos/[slug]` con contenido detallado.
- Sección de blog / casos de estudio (Markdown via `vite-plugin-mdx`).
- Formulario de contacto con backend (Formspree, AWS SES, o función
  Lambda detrás de CloudFront).
- Internacionalización ES/EN con `react-i18next`.
