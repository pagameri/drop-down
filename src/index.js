import './styles.css';
import createDropdownMenu from './createDropdownMenu';
import addDropdownListener from './addDropdownListener';

const navRight = document.querySelector('.nav-right');

createDropdownMenu(navRight, 'New', ['first', 'second', 'third', 'fourth']);

addDropdownListener();
