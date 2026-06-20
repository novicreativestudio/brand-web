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
  if (!trust) return;

  const countNumbers = () => {
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

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        trust.classList.add('in-view');
        countNumbers();
        observer.disconnect();
      });
    }, { threshold: 0.2 });
    observer.observe(trust);
  } else {
    trust.classList.add('in-view');
    countNumbers();
  }
})();
