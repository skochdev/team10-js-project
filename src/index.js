import './sass/main.scss';
import getRefs from './js/get-refs';
import fetchGenres from './js/fetchGenres';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';

const refs = getRefs();

saveGenresToLocalStorage();

fetchPopularMovies(1)
  .then(response => {
    const genres = JSON.parse(localStorage.getItem('genre_ids'));
    renderTrending(refs.gallery, response.results, genres);
    localStorage.setItem('currentFilms', JSON.stringify(response));
  }).catch(error => console.log(error));


  



