import './sass/main.scss';
import getRefs from './js/get-refs';
import fetchGenres from './js/fetchGenres';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage'
import onScroll from './js/scrollUpBtn';

const refs = getRefs();

saveGenresToLocalStorage();

fetchPopularMovies(1)
  .then(response => {
    renderTrending(refs.gallery, response.results);

    addDataToLocalStorage(refs.movieKey, response);
  }).catch(error => console.log(error));

// addTestWatchedQueue();

onScroll();


