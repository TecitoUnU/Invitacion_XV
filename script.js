// ============================================================
// EDITABLE: fecha del evento y datos de WhatsApp
// ============================================================
const EVENT_DATE = new Date('2026-09-26T16:00:00-06:00'); // año-mes-diaTHH:mm:ss (zona GT)

const WHATSAPP_NUMBER = '50248468099'; // EDITABLE: tu número con código de país, sin +
const WHATSAPP_MESSAGE = '¡Hola! Confirmo mi asistencia a los XV años de Valeria. Vamos ___ persona(s). 💗';

// ------------------------------------------------------------
// Countdown
// ------------------------------------------------------------
function updateCountdown(){
  const now = new Date();
  let diff = EVENT_DATE - now;

  if (diff < 0) diff = 0;

  const dias  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min   = Math.floor((diff / (1000 * 60)) % 60);
  const seg   = Math.floor((diff / 1000) % 60);

  const pad = n => String(n).padStart(2, '0');

  document.getElementById('cd-dias').textContent  = pad(dias);
  document.getElementById('cd-horas').textContent = pad(horas);
  document.getElementById('cd-min').textContent   = pad(min);
  document.getElementById('cd-seg').textContent   = pad(seg);
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ------------------------------------------------------------
// Botón de WhatsApp
// ------------------------------------------------------------
const rsvpBtn = document.getElementById('rsvp-btn');
if (rsvpBtn) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  rsvpBtn.setAttribute('href', url);
}

// ------------------------------------------------------------
// Reveal on scroll
// ------------------------------------------------------------
document.querySelectorAll('.block, .timeline').forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// ===============================
// Música de fondo
// ===============================
let started = false;

window.addEventListener("scroll", () => {

    if(started) return;

    started = true;

    bgMusic.currentTime = 22;

    bgMusic.play().catch(()=>{});

}, { once:true });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
