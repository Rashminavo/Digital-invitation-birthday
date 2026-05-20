const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');

document.body.addEventListener('click', openEnvelope);

function openEnvelope() {
  document.body.removeEventListener('click', openEnvelope);
  document.getElementById('clickHint').style.display = 'none';

  // Step 1: Flap opens
  flap.classList.add('open');

  // Step 2: Letter rises
  setTimeout(() => {
    letter.classList.add('rise');
  }, 500);

  // Step 3: Navigate to invitation
  setTimeout(() => {
    window.location.href = 'invitation.html';
  }, 1800);
}