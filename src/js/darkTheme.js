import Darkmode from 'darkmode-js';
import getRefs from './get-refs';

const refs = getRefs();
const darkmode = new Darkmode();

refs.changeTheme = document.querySelector('.dark-mode');
refs.changeTheme.addEventListener('click', onDarkMode);

export default function onDarkMode() {
    refs.changeTheme.classList.add(darkmode.toggle());

    if (darkmode.isActivated()) {
        document.getElementById("dark-toggle").checked = true;
    }
    else {
        document.getElementById("dark-toggle").checked = false;
    }
}