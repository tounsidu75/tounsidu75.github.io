/* Sami Kharraz · Portfolio · main.js */
(() => {
  'use strict';

  // Nav: ombre + bordure quand on scrolle, gestion menu mobile
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');

  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Ferme le menu au clic sur un lien
    nav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Filtre projets (page projects.html)
  const filters = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.project-card[data-cat]');
  if (filters.length && cards.length) {
    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        filters.forEach((b) => b.classList.toggle('is-active', b === btn));
        cards.forEach((card) => {
          const match = cat === 'all' || card.dataset.cat === cat;
          card.hidden = !match;
        });
      });
    });
  }
})();
