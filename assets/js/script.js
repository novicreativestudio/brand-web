(() => {
  const body = document.body;
  const button = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#primary-nav');

  const closeMenu = () => {
    if (!button) return;
    body.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
  };

  if (button && nav) {
    button.addEventListener('click', () => {
      const isOpen = body.classList.toggle('nav-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) closeMenu();
    });
  }

  const trust = document.querySelector('.trust-section');

  const countNumbers = () => {
    if (!trust) return;
    trust.querySelectorAll('[data-count]').forEach((el) => {
      if (el.dataset.done) return;
      el.dataset.done = 'true';
      const target = Number(el.dataset.count);
      const isDecimal = !Number.isInteger(target);
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = isDecimal ? value.toFixed(1) : String(Math.round(value));
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = isDecimal ? target.toFixed(1) : String(target);
      };
      requestAnimationFrame(tick);
    });
  };

  const observedSections = document.querySelectorAll('.trust-section, .observed-section');
  if (!observedSections.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        if (entry.target === trust) countNumbers();
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    observedSections.forEach((section) => observer.observe(section));
  } else {
    observedSections.forEach((section) => section.classList.add('in-view'));
    countNumbers();
  }
})();
