import './sass/main.scss';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage';
import onScroll from './js/scrollUpBtn';

import { pagination, paginationSettings } from './js/pagination';
import 'tui-pagination/dist/tui-pagination.css';

import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';


const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();

fetchPopularMovies(paginationSettings.startPage)
  .then(response => {

    const genres = JSON.parse(localStorage.getItem('genre_ids'));

    const totalItems = response.total_results;
    const page = response.page;
    paginationSettings.searchType = 'popular';
    pagination({ totalItems, page });

    renderTrending(refs.gallery, response.results, genres);

    renderTrending(refs.gallery, response.results);

    addDataToLocalStorage(refs.movieKey, response);

    onLoaderHidden();
  })
  .catch(error => console.log(error));

// addTestWatchedQueue();

onScroll();
