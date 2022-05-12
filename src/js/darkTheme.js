import Darkmode from 'darkmode-js';
import getRefs from './get-refs';

const refs = getRefs();
const darkmode = new Darkmode();
chosenTheme();

refs.changeTheme = document.querySelector('.dark-mode');
refs.changeTheme.addEventListener('click', onDarkMode);

export default function onDarkMode() {
  refs.changeTheme.classList.add(darkmode.toggle());

  refs.themeIcon.classList.add('dark-fill'); // змінює колір іконки

  if (darkmode.isActivated()) {
    document.getElementById('dark-toggle').checked = true;
  } else {
    refs.themeIcon.classList.remove('dark-fill'); // змінює колір іконки
    document.getElementById('dark-toggle').checked = false;
  }
}

function chosenTheme() {
  if (localStorage.getItem('darkmode') === 'true') {
    refs.themeIcon.classList.add('dark-fill'); // ставить колір в залежності від перевірки
    document.getElementById('dark-toggle').checked = true;
  }
  if (localStorage.getItem('darkmode') === 'false') {
    document.getElementById('dark-toggle').checked = false;
    refs.themeIcon.classList.remove('dark-fill'); // ставить колір в залежності від перевірки
  }
}
