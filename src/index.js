import 'tui-pagination/dist/tui-pagination.css';
import './sass/main.scss';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import onScroll from './js/scrollUpBtn';
// import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';

const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

// addTestWatchedQueue();

onScroll();
