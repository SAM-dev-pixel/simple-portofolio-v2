const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const lines = document.querySelectorAll('.line');

//burger button click
burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  lines.forEach(line => line.classList.toggle('click'));
});
//nav link click
navLink.forEach(l => l.addEventListener('click', () => {
  navLinks.classList.remove('active');
  lines.forEach(line => line.classList.remove('click'));
}));
// mode button click
const modeButton = document.querySelector('.mode');
  modeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if(modeButton.classList.contains('bxs-moon')) {
      modeButton.classList.replace('bxs-moon', 'bxs-sun');
      modeButton.style.color = '#fff';
    } else {
      modeButton.classList.replace('bxs-sun', 'bxs-moon');
      modeButton.style.color = '#000'
    }
});

//Reveal UI 
const sr = ScrollReveal({
  origin: 'top',
  distance: '70px',
  duration: 2000,
  reset: true
});

sr.reveal('.title', {});
sr.reveal('.welcome-text', {delay: 100});
sr.reveal('.email', {delay: 200});

sr.reveal('#work h2', {});
sr.reveal('.work-tail', {interval: 150});

sr.reveal('#about p', {interval: 200})

sr.reveal('#contact h2', {})
sr.reveal('#contact a', {interval: 150})