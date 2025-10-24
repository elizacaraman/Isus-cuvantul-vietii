const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

function toggleMenu() {
  mobileMenu.classList.toggle('-translate-x-full');
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Forțează viewport-ul să fie full height pe mobil la load
window.addEventListener('load', () => {
  document.body.style.height = window.innerHeight + 'px';
});

window.addEventListener('resize', () => {
  document.body.style.height = window.innerHeight + 'px';
});
