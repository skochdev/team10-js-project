import './sass/main.scss';
import getRefs from './js/get-refs';
import fetchGenres from './js/fetchGenres';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage';
import onScroll from './js/scrollUpBtn';
import { pagination, paginationSettings } from './js/pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = getRefs();

saveGenresToLocalStorage();

fetchPopularMovies(paginationSettings.startPage)
  .then(response => {
    const genres = JSON.parse(localStorage.getItem('genre_ids'));
    const totalItems = response.total_results;
    const page = paginationSettings.startPage;
    renderTrending(refs.gallery, response.results, genres);

    pagination({ totalItems, page });

    addDataToLocalStorage(refs.movieKey, response);
  })
  .catch(error => console.log(error));

// addTestWatchedQueue();

onScroll();
