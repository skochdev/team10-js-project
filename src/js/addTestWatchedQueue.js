import getRefs from './get-refs';
import fetchPopularMovies from './fetchPopularMovies';
import fetchGenres from './fetchGenres';
import renderTrending from './renderTrending';

export default function addTestWatchedQueue() {
  const refs = getRefs();
  fetchPopularMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
    localStorage.setItem('watched', JSON.stringify(response.results));
  }).catch(error => console.log(error));
  fetchPopularMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
    localStorage.setItem('queue', JSON.stringify(response.results));
  }).catch(error => console.log(error));
}