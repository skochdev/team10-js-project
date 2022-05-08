import './sass/main.scss';
import getRefs from './js/get-refs';
import fetchGenres from './js/fetchGenres';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage';
import renderingPlaceholder from './js/renderingPlaceholder';

import { before } from 'lodash';

const refs = getRefs();

saveGenresToLocalStorage();

fetchPopularMovies(1)
  .then(response => {
    const genres = JSON.parse(localStorage.getItem('genre_ids'));
    renderTrending(refs.gallery, response.results, genres);
    renderingPlaceholder();
    addDataToLocalStorage(refs.movieKey, response);
  })
  .catch(error => console.log(error));

// addTestWatchedQueue();
