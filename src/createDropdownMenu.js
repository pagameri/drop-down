function createMenuItems(name, array) {
  const menu = document.createElement('ul');
  const nameClass = name.toLowerCase();
  menu.classList.add('dropdown-menu', nameClass);

  array.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    menu.appendChild(li);
  });

  return menu;
}

export default function createDropdownMenu(parentElem, menuName, menuArray) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  dropdown.setAttribute('data-dropdown', '');
  parentElem.appendChild(dropdown);

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  menuBtn.setAttribute('data-menu-btn', '');
  menuBtn.textContent = menuName;
  dropdown.appendChild(menuBtn);

  const dropdownMenu = createMenuItems(menuName, menuArray);
  dropdown.appendChild(dropdownMenu);
}
