import { fetchTrendingMovies } from "./api";

export default function addTestWatchedQueue() {
  fetchTrendingMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    localStorage.setItem('watched', JSON.stringify(response.results));
  }).catch(error => console.log(error));
  fetchTrendingMovies(Math.floor(Math.random() * 1000) + 1)
  .then(response => {
    localStorage.setItem('queue', JSON.stringify(response.results));
  }).catch(error => console.log(error));
}