/* DotAppsCenter — i18n ES/EN
   Traduce los elementos con [data-i18n] (innerHTML), recuerda la elección
   en localStorage y detecta el idioma del navegador la primera vez. */

const I18N = {
  es: {
    "meta.title": "DotAppsCenter — Apps minimalistas",
    "meta.desc": "DotAppsCenter crea apps Android minimalistas con estética Nothing: monocromo, dot-matrix y diseño esencial.",

    "nav.home": "Inicio",
    "nav.apps": "Apps",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Apps Android · Estética Nothing",
    "hero.title": 'Diseño que se<br /><span class="accent">reduce</span> a lo esencial.',
    "hero.desc": "En DotAppsCenter construimos aplicaciones minimalistas: negro OLED, tipografía dot-matrix y un único acento rojo. Nada de ruido, solo lo que importa.",
    "hero.cta1": "Ver nuestras apps",
    "hero.cta2": "Conócenos",
    "hero.stat1": "apps publicadas",
    "hero.stat2": "offline · sin anuncios",
    "hero.stat3": "negro OLED puro",

    "apps.eyebrow": "Nuestras apps",
    "apps.title": "Hechas con el mismo lenguaje",
    "apps.subtitle": "Una familia coherente de herramientas diarias, todas siguiendo el Dot Design System.",
    "apps.notes.desc": "Notas minimalistas con Markdown, categorías, checklists, búsqueda y widget. Tus ideas, sin distracciones.",
    "apps.podo.desc": "Registra caminatas, carreras y rutas en bici con GPS, mapa en tiempo real y estadísticas. Todo local en tu dispositivo.",
    "apps.soon.title": "Más en camino",
    "apps.soon.desc": "Estamos diseñando nuevas herramientas con el mismo principio: minimalismo radical y foco total en el usuario.",
    "apps.soon.tag": "En desarrollo",
    "apps.soon.badge": "Pronto",
    "apps.badge.soon": "Próximamente en Play Store",

    "about.eyebrow": "Nosotros",
    "about.title": "Menos, pero mejor.",
    "about.p1": "DotAppsCenter es un estudio independiente enfocado en apps Android que respetan tu atención y tu privacidad. Nos inspira el lenguaje de Nothing: monocromo, puntos y precisión.",
    "about.p2": "Cada app de la familia comparte el mismo sistema de diseño —negro OLED, dot-matrix y un solo acento rojo— para que se sientan como hermanas. Sin anuncios, sin rastreo, con tus datos siempre en tu dispositivo.",
    "about.v1t": "Minimalismo",
    "about.v1d": "Si un elemento no es contenido ni navegación, sobra. Quitamos antes de añadir.",
    "about.v2t": "Privacidad",
    "about.v2d": "Tus datos viven en tu teléfono. Sin nube obligatoria, sin anuncios, sin rastreo.",
    "about.v3t": "Coherencia",
    "about.v3d": "Un único lenguaje visual en toda la familia: aprendes una, las conoces todas.",
    "about.v4t": "Detalle",
    "about.v4d": "Tipografía dot-matrix, animaciones precisas y negro OLED real. El detalle es la marca.",

    "contact.eyebrow": "Contacto",
    "contact.title": "¿Sugerencias o errores?",
    "contact.sub": "Escríbenos. Leemos cada mensaje.",
    "contact.btn": "Enviar correo",

    "footer.tagline": "Apps minimalistas para Android",

    // privacy.html
    "pv.meta.title": "Política de Privacidad — DotAppsCenter",
    "pv.back": "← DotAppsCenter",
    "pv.eyebrow": "Legal",
    "pv.title": "Política de Privacidad",
    "pv.intro": "Aplica a las apps de DotAppsCenter: <strong>DotNotes</strong> y <strong>DotPodómetro</strong>.<br/>Última actualización: 29 de mayo de 2026.",
    "pv.h.summary": "Resumen",
    "pv.summary": "En DotAppsCenter diseñamos apps que respetan tu privacidad. <strong>No recopilamos, transmitimos ni vendemos tus datos personales.</strong> Todo lo que creas o registras se guarda únicamente en tu dispositivo. No usamos anuncios, ni rastreo, ni analítica de terceros.",
    "pv.h.data": "Datos que se almacenan (solo en tu dispositivo)",
    "pv.data.notes": "<strong>DotNotes:</strong> tus notas, listas y categorías se guardan localmente. Las copias de seguridad (exportar/importar) las controlas tú: el archivo se guarda donde elijas mediante el selector del sistema.",
    "pv.data.podo": "<strong>DotPodómetro:</strong> tus actividades (tipo, distancia, duración y ruta GPS) se guardan localmente. La ubicación se usa <strong>solo durante el seguimiento que tú inicias</strong>, para calcular tu recorrido, y <strong>nunca sale de tu dispositivo</strong>.",
    "pv.h.perms": "Permisos",
    "pv.perm.loc": "<strong>Ubicación (DotPodómetro):</strong> necesaria para registrar distancia y ruta durante una actividad. Solo se usa en primer plano, mientras el seguimiento está activo.",
    "pv.perm.notif": "<strong>Notificaciones:</strong> para mostrar el seguimiento en curso.",
    "pv.perm.net": "<strong>Internet (DotPodómetro):</strong> únicamente para descargar las teselas del mapa.",
    "pv.h.third": "Servicios de terceros",
    "pv.third": 'DotPodómetro muestra mapas mediante <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>. Para dibujar el mapa, la app descarga imágenes (teselas) de sus servidores, lo que implica enviarles tu dirección IP y la zona del mapa solicitada, según su propia política. No compartimos con ellos ningún otro dato tuyo.',
    "pv.h.kids": "Niños",
    "pv.kids": "Nuestras apps no están dirigidas a menores de 13 años y no recopilan datos de ellos.",
    "pv.h.changes": "Cambios",
    "pv.changes": "Si actualizamos esta política, publicaremos la nueva versión en esta página con su fecha.",
    "pv.h.contact": "Contacto",
    "pv.contact": 'Para cualquier consulta sobre privacidad: <a href="mailto:contacto@dotappscenter.com">contacto@dotappscenter.com</a>'
  },

  en: {
    "meta.title": "DotAppsCenter — Minimalist apps",
    "meta.desc": "DotAppsCenter builds minimalist Android apps with a Nothing-inspired look: monochrome, dot-matrix and essential design.",

    "nav.home": "Home",
    "nav.apps": "Apps",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Android apps · Nothing-inspired",
    "hero.title": 'Design stripped<br />down to the <span class="accent">essential</span>.',
    "hero.desc": "At DotAppsCenter we build minimalist apps: OLED black, dot-matrix typography and a single red accent. No noise, only what matters.",
    "hero.cta1": "See our apps",
    "hero.cta2": "About us",
    "hero.stat1": "apps shipped",
    "hero.stat2": "offline · no ads",
    "hero.stat3": "true OLED black",

    "apps.eyebrow": "Our apps",
    "apps.title": "Built with the same language",
    "apps.subtitle": "A coherent family of everyday tools, all following the Dot Design System.",
    "apps.notes.desc": "Minimalist notes with Markdown, categories, checklists, search and a widget. Your ideas, distraction-free.",
    "apps.podo.desc": "Track walks, runs and bike rides with GPS, a live map and stats. Everything stays local on your device.",
    "apps.soon.title": "More on the way",
    "apps.soon.desc": "We're designing new tools with the same principle: radical minimalism and total focus on the user.",
    "apps.soon.tag": "In development",
    "apps.soon.badge": "Soon",
    "apps.badge.soon": "Coming soon to Play Store",

    "about.eyebrow": "About",
    "about.title": "Less, but better.",
    "about.p1": "DotAppsCenter is an independent studio focused on Android apps that respect your attention and your privacy. We're inspired by Nothing's language: monochrome, dots and precision.",
    "about.p2": "Every app in the family shares the same design system —OLED black, dot-matrix and a single red accent— so they feel like siblings. No ads, no tracking, your data always on your device.",
    "about.v1t": "Minimalism",
    "about.v1d": "If something isn't content or navigation, it's clutter. We remove before we add.",
    "about.v2t": "Privacy",
    "about.v2d": "Your data lives on your phone. No mandatory cloud, no ads, no tracking.",
    "about.v3t": "Consistency",
    "about.v3d": "One visual language across the family: learn one, you know them all.",
    "about.v4t": "Detail",
    "about.v4d": "Dot-matrix type, precise animations and real OLED black. The detail is the brand.",

    "contact.eyebrow": "Contact",
    "contact.title": "Suggestions or bugs?",
    "contact.sub": "Write to us. We read every message.",
    "contact.btn": "Send email",

    "footer.tagline": "Minimalist apps for Android",

    // privacy.html
    "pv.meta.title": "Privacy Policy — DotAppsCenter",
    "pv.back": "← DotAppsCenter",
    "pv.eyebrow": "Legal",
    "pv.title": "Privacy Policy",
    "pv.intro": "Applies to the DotAppsCenter apps: <strong>DotNotes</strong> and <strong>DotPodómetro</strong>.<br/>Last updated: May 29, 2026.",
    "pv.h.summary": "Summary",
    "pv.summary": "At DotAppsCenter we design apps that respect your privacy. <strong>We do not collect, transmit or sell your personal data.</strong> Everything you create or record is stored only on your device. We use no ads, no tracking and no third-party analytics.",
    "pv.h.data": "Data stored (only on your device)",
    "pv.data.notes": "<strong>DotNotes:</strong> your notes, lists and categories are stored locally. Backups (export/import) are under your control: the file is saved wherever you choose via the system picker.",
    "pv.data.podo": "<strong>DotPodómetro:</strong> your activities (type, distance, duration and GPS route) are stored locally. Location is used <strong>only during the tracking you start</strong>, to compute your route, and <strong>never leaves your device</strong>.",
    "pv.h.perms": "Permissions",
    "pv.perm.loc": "<strong>Location (DotPodómetro):</strong> required to record distance and route during an activity. Used only in the foreground, while tracking is active.",
    "pv.perm.notif": "<strong>Notifications:</strong> to show ongoing tracking.",
    "pv.perm.net": "<strong>Internet (DotPodómetro):</strong> only to download map tiles.",
    "pv.h.third": "Third-party services",
    "pv.third": 'DotPodómetro displays maps via <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>. To draw the map, the app downloads images (tiles) from their servers, which means sending them your IP address and the requested map area, per their own policy. We share no other data of yours with them.',
    "pv.h.kids": "Children",
    "pv.kids": "Our apps are not directed at children under 13 and do not collect their data.",
    "pv.h.changes": "Changes",
    "pv.changes": "If we update this policy, we'll publish the new version on this page with its date.",
    "pv.h.contact": "Contact",
    "pv.contact": 'For any privacy inquiry: <a href="mailto:contacto@dotappscenter.com">contacto@dotappscenter.com</a>'
  }
};

function applyLang(lang) {
  if (!I18N[lang]) lang = "es";
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const t = dict[el.dataset.i18n];
    if (t != null) el.innerHTML = t;
  });

  // <title> y meta description (clave por página vía data-i18n-title)
  const titleKey = document.body.dataset.titleKey || "meta.title";
  if (dict[titleKey]) document.title = dict[titleKey];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );

  try { localStorage.setItem("dot_lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let lang;
  try { lang = localStorage.getItem("dot_lang"); } catch (e) {}
  if (!lang) lang = (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";

  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  applyLang(lang);
});
