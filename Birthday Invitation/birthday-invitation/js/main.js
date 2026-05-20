// ===== COUNTDOWN =====
const partyDate = new Date('2025-07-12T18:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = partyDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<div class="party-time">🎉 The party is NOW! 🎉</div>';
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('days').textContent    = String(d).padStart(2,'0');
  document.getElementById('hours').textContent   = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== RSVP =====
function rsvp(choice) {
  const msg = document.getElementById('rsvpMessage');
  const btns = document.querySelectorAll('.rsvp-btn');
  
  btns.forEach(b => b.classList.remove('selected'));
  document.querySelector(`.rsvp-btn.${choice}`).classList.add('selected');

  if (choice === 'yes') {
    msg.textContent = "🐻 Beary excited to see you there! We'll save you a spot!";
    // Optional: Send to Google Forms / WhatsApp link
    setTimeout(() => {
      window.open('https://wa.me/94XXXXXXXXX?text=Hi! I will be attending the party! 🐾', '_blank');
    }, 1000);
  } else {
    msg.textContent = "😢 We'll miss you! We'll save some cake for you 🍰";
  }
}

// ===== PAGE ENTRANCE ANIMATION =====
document.body.classList.add('page-enter');

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease both';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.detail-card, .photo-item, .count-box')
  .forEach(el => observer.observe(el));