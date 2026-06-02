# DotWeb — Sitio web de DotAppsCenter

Sitio estático (HTML/CSS/JS, sin dependencias ni build) con la estética **Dot**
(monocromo + acento rojo, dot-matrix), alineado con el [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) de las apps.

**Desplegado en:** https://dotappscenter.netlify.app/

## Estructura
```
DotWeb/
├── index.html         Página única: Inicio · Apps · Nosotros · Contacto
├── privacy.html       Política de privacidad (bilingüe, requerida por Play Store)
├── css/styles.css     Tokens del Dot Design System + componentes
├── js/main.js         Menú móvil, año y correo de contacto centralizado
├── js/i18n.js         i18n ES/EN ([data-i18n]) + título/meta y document.lang
├── og-image.svg       Fuente de la imagen social (1200×630)
├── og-image.png       Imagen social generada (Open Graph / Twitter Card)
├── favicon.svg        Favicon (marca dot-matrix) + favicon-32.png / apple-touch-icon.png
├── robots.txt         SEO: permite indexar + apunta al sitemap
└── sitemap.xml        SEO: index.html + privacy.html
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
- **Textos i18n:** en `js/i18n.js` (objetos `I18N.es` / `I18N.en`); mantener paridad de claves.
- **Imagen social:** edita `og-image.svg` y regenera el PNG:
  `rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png`. El favicon se regenera
  igual desde `favicon.svg` (`-w 32 -h 32` y `-w 180 -h 180` para apple-touch).
- **Dominio:** las URLs absolutas (canonical, Open Graph, sitemap) apuntan a
  `https://dotappscenter.netlify.app/`; actualízalas si cambias de dominio.

## Desplegar
Al ser estático, sube la carpeta `DotWeb/` tal cual a GitHub Pages, Netlify, Vercel
o Cloudflare Pages (sin pasos de build).
