import 'tui-pagination/dist/tui-pagination.css';
import onDarkMode from './js/darkTheme';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage';
import onScroll from './js/scrollUpBtn';
import renderingPlaceholder from './js/renderingPlaceholder';

import { pagination, paginationSettings } from './js/pagination';

import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';
import './sass/main.scss';

const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

onScroll();
