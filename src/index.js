import './sass/main.scss';
import getRefs from './js/get-refs';
import fetchGenres from './js/fetchGenres';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';

const refs = getRefs();
saveGenresToLocalStorage();
const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
fetchPopularMovies(1).then(response => {
  renderTrending(refs.gallery, response.results, genres);
  localStorage.setItem('trending', JSON.stringify(response));
  }).catch(error => console.log(error));
