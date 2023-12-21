const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    navEl.classList.add('navbar-scrolled');
    navEl.style.marginTop = '0';
  } else {
    navEl.classList.remove('navbar-scrolled');
    navEl.style.marginTop = '20px';
  }
});

