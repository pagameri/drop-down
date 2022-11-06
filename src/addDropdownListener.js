export default function addDropdownListener() {
  const menuBtn = document.querySelectorAll('[data-menu-btn]');
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  document.addEventListener('click', (e) => {
    if (!menuBtn && e.target.closest(dropdownMenu) != null) {
      return;
    }

    let currentDropdownMenu;
    const currentMenuBtn = e.target;
    if (e.target.matches('[data-menu-btn]')) {
      e.target.classList.add('active');
      currentDropdownMenu = e.target.closest('[data-dropdown]');
      currentDropdownMenu.classList.toggle('visible');
    }

    dropdownMenu.forEach((menu) => {
      if (menu === currentDropdownMenu) {
        return;
      }
      menu.classList.remove('visible');
    });

    menuBtn.forEach((button) => {
      if (button === currentMenuBtn) {
        return;
      }
      button.classList.remove('active');
    });
  });
}
