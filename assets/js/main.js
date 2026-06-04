/* Sami Kharraz — Portfolio v2 — main.js
   Vanilla JS, no dependencies.
   All animations respect prefers-reduced-motion. */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* ---------- Sticky nav border on scroll ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navList.classList.toggle('is-open', !open);
    });
  }

  /* ---------- Scroll progress bar ---------- */
  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* ---------- Reveal on scroll (fade-up + stagger) ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('is-visible');
        [...el.children].forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`;
        });
        reveal.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

    const revealSelf = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        revealSelf.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal-self]').forEach((el) => revealSelf.observe(el));
  } else {
    document.querySelectorAll('[data-reveal], [data-reveal-self]').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Project filters (projects.html) ---------- */
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterables = document.querySelectorAll('[data-cat]');
  if (filterButtons.length && filterables.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        filterButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
        filterables.forEach((card) => {
          const cats = (card.dataset.cat || '').split(/\s+/);
          const show = cat === 'all' || cats.includes(cat);
          card.style.transition = `opacity ${reduceMotion ? '0ms' : '300ms'} ease`;
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = show ? '' : 'none';
            requestAnimationFrame(() => { card.style.opacity = '1'; });
          }, reduceMotion ? 0 : 200);
        });
      });
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    link.addEventListener('click', (ev) => {
      const target = document.querySelector(href);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
