/* DotAppsCenter — interacciones mínimas */

// ⬇️ Cambia aquí el correo de soporte (se aplica al enlace y al botón de Contacto)
const SUPPORT_EMAIL = "contacto@dotappscenter.com";

document.addEventListener("DOMContentLoaded", () => {
  // Año del footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Correo de contacto centralizado
  const emailLink = document.getElementById("contactEmail");
  const emailBtn = document.getElementById("contactBtn");
  if (emailLink) {
    emailLink.textContent = SUPPORT_EMAIL;
    emailLink.href = `mailto:${SUPPORT_EMAIL}`;
  }
  if (emailBtn) {
    emailBtn.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Contacto · DotAppsCenter")}`;
  }

  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
});
