function blurOnScroll () {
  const y = document.documentElement.scrollTop; // fallback to body if needed
  const nav = document.querySelector('.navbar');

  if (y > 0) {
    nav.style.backdropFilter        = 'blur(10px)';
    nav.style.webkitBackdropFilter  = 'blur(10px)';
  } else {
    nav.style.backdropFilter        = 'blur(0px)';
    nav.style.webkitBackdropFilter  = 'blur(0px)';
  }
}
blurOnScroll()
window.addEventListener('scroll', blurOnScroll, { passive:true });

const toggle = document.querySelector('.hamburger')
const menu = document.getElementById('nav-menu')
const menuIcon = document.getElementById('menu-icon')

let isMenuOpen = false;

toggle.addEventListener('click', (e) => {
  if (!isMenuOpen) {
    menu.classList.remove('hide');
    menu.style.display = 'flex';
    void menu.offsetWidth;
    menu.classList.add('show');
    document.body.style.overflowY = 'hidden'
    e.currentTarget.classList.toggle('is-active');
    isMenuOpen = true;
  } else {
    menu.classList.remove('show');
    menu.classList.add('hide');
    e.currentTarget.classList.toggle('is-active');

    setTimeout(() => {
      menu.style.display = 'none';
      document.body.style.overflowY = 'auto'
    }, 400);
    isMenuOpen = false;
  }
});

function toggleNav() {
  const vw = window.innerWidth;
  if (vw >= 900 && isMenuOpen) {
    menu.classList.remove('show');
    menu.classList.add('hide');
    toggle.classList.remove('is-active');

    document.body.style.overflowY = 'auto'
    setTimeout(() => {
      menu.style.display = 'none';
      isMenuOpen = false;
    }, 400);
  }
}

window.addEventListener('load', toggleNav);
window.addEventListener('resize', toggleNav);

const bgModeButton = document.getElementById('bg-mode-button')
const svg = document.querySelector('svg')

if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
  svg.innerHTML = `<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>`;
}

bgModeButton.addEventListener("click", () => {
  const isLight = document.documentElement.classList.contains('light');
  
  document.documentElement.classList.toggle('light');
  
  // ✅ Update localStorage
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
  
  // ✅ Change icon
  svg.innerHTML = isLight
    ? `<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>`
    : `<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>`;
});