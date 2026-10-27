'use strict';

// Navigation and all content work without JavaScript. Enhance the current-section
// indicator while scrolling, without changing browser history or keyboard focus.
const navigationLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const sections = navigationLinks
  .map(link => document.getElementById(link.hash.slice(1)))
  .filter(Boolean);
const header = document.querySelector('.site-header');

function updateCurrentSection() {
  const threshold = header.getBoundingClientRect().bottom + 55;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section;
  }
  // At the end of the page, the last section may be shorter than the viewport.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    current = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (current && link.hash === `#${current.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

let scrollQueued = false;
window.addEventListener('scroll', () => {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(() => {
    updateCurrentSection();
    scrollQueued = false;
  });
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('load', updateCurrentSection);
updateCurrentSection();

const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
