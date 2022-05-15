import 'tui-pagination/dist/tui-pagination.css';
import onDarkMode from './js/darkTheme';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import onScroll from './js/scrollUpBtn';
// import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';
import './sass/main.scss';

const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

onScroll();
refs.filterList.addEventListener('click', onFilterClick);

function onFilterClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const currentBtn = event.target;
  const previousBtn = refs.filterList.querySelector('.filter__btn--active');
  const mode = event.target.dataset.action;
  renderMainPage(mode);
  changeActiveButton(currentBtn, previousBtn);
}

function changeActiveButton(current, previous) {
  previous.classList.remove('filter__btn--active');
  current.classList.add('filter__btn--active');
}
