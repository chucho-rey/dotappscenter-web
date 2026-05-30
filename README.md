# DotWeb — Sitio web de DotAppsCenter

Sitio estático (HTML/CSS/JS, sin dependencias ni build) con la estética **Dot/Nothing**
(monocromo + acento rojo, dot-matrix), alineado con el [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) de las apps.

## Estructura
```
DotWeb/
├── index.html        Página única: Inicio · Apps · Nosotros · Contacto
├── css/styles.css    Tokens del Dot Design System + componentes
└── js/main.js        Menú móvil, año y correo de contacto centralizado
```

## Ver en local
Abre `index.html` en el navegador, o sirve la carpeta:
```bash
cd DotWeb && python -m http.server 8000   # luego abre http://localhost:8000
```

## Personalizar
- **Correo de contacto:** edita `SUPPORT_EMAIL` en `js/main.js` (un solo sitio).
- **Enlaces a Play Store:** cuando publiques, reemplaza los badges "Próximamente"
  en `index.html` por enlaces reales a las fichas de las apps.
- **Fuentes:** DotGothic16 + Space Grotesk se cargan desde Google Fonts (ambas SIL OFL).

## Desplegar
Al ser estático, sube la carpeta `DotWeb/` tal cual a GitHub Pages, Netlify, Vercel
o Cloudflare Pages (sin pasos de build).
