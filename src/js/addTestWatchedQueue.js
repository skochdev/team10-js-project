import fetchPopularMovies from './fetchPopularMovies';

export default function addTestWatchedQueue() {
  fetchPopularMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    localStorage.setItem('watched', JSON.stringify(response.results));
  }).catch(error => console.log(error));
  fetchPopularMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    localStorage.setItem('queue', JSON.stringify(response.results));
  }).catch(error => console.log(error));
}