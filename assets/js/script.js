(() => {
  const body = document.body;
  const button = document.querySelector('.mobile-menu');
  const nav = document.querySelector('#primary-nav');

  if (!button || !nav) return;

  const closeMenu = () => {
    body.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
  };

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
})();
