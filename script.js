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
// Música de fondo (en bucle)
// ------------------------------------------------------------
// EDITABLE: sube tu canción como assets/musica.mp3 (mismo nombre exacto)
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

function setMusicButtonState(isPlaying){
  if (!musicToggle) return;
  musicToggle.classList.toggle('is-playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Pausar música' : 'Reproducir música');
}

function playMusic(){
  if (!bgMusic) return;
  bgMusic.volume = 0.55;
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise.then(() => setMusicButtonState(true)).catch(() => setMusicButtonState(false));
  }
}

if (bgMusic) {
  // La mayoría de navegadores bloquean el autoplay con sonido: intentamos
  // reproducir de inmediato y, si el navegador lo bloquea, arrancamos en
  // cuanto la persona toque o haga clic en cualquier parte de la página.
  playMusic();

  const startOnFirstInteraction = () => {
    if (bgMusic.paused) playMusic();
    document.removeEventListener('click', startOnFirstInteraction);
    document.removeEventListener('touchstart', startOnFirstInteraction);
  };
  document.addEventListener('click', startOnFirstInteraction, { once: true });
  document.addEventListener('touchstart', startOnFirstInteraction, { once: true });
}

if (musicToggle) {
  musicToggle.addEventListener('click', () => {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      playMusic();
    } else {
      bgMusic.pause();
      setMusicButtonState(false);
    }
  });
}

// ------------------------------------------------------------
// Reveal on scroll
// ------------------------------------------------------------
document.querySelectorAll('.block, .itinerary').forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
