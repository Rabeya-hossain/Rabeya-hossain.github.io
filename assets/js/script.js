'use strict';

const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation-links');

function closeMenu() {
  header.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  for (const item of navigation.querySelectorAll('a')) {
    if (item === link) item.setAttribute('aria-current', 'location');
    else item.removeAttribute('aria-current');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 576px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
