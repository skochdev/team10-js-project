import 'tui-pagination/dist/tui-pagination.css';
import onDarkMode from './js/darkTheme';
// import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import onScroll from './js/scrollUpBtn';
// import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';
import './sass/main.scss';

// const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

onScroll();
