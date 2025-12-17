// Only two functions: openMenu and closeMenu

function openMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.add('menu--open');      // CSS shows modal when this class is present
  menu.setAttribute('aria-hidden', 'false');

  // optional: add a body class to prevent background scroll
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.remove('menu--open');
  menu.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';
}
