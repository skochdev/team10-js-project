import axios from 'axios';
import onLoaderVisible from './onLoaderVisible';

export const API_KEY = 'c4bc941c607c9762d744b272a86df854';
// Запит жанрів
export async function fetchGenres() {
  const { data } = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  return data.genres;
}
// Запит пошуку фільмів за ключовими словами
export async function fetchKeyWord(searchQuery, page = 1) {
  onLoaderVisible();
  const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}`);
  return response;
}
// Запит подробиць фільму за його ідентифікатором
export async function fetchMovieById(movie_id) {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
  return data;
}
// Запит трендових фільмів (щодо яких за визначений період 'day' або 'week' виконано найбільше запитів) - для головної сторінки
export async function fetchTrendingMovies(page = 1, period = 'day') {
  onLoaderVisible();
  const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/${period}?api_key=${API_KEY}&page=${page}`);
  return data;
}
// Запит фільмів з найбільшими оцінками (рейтингом)
export async function fetchTopRatedMovies(page = 1) {
  onLoaderVisible();
  const { data } = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
  return data;
}
// Запит популярних фільмів (за користувацькою ознакою популярності)
export async function fetchPopularMovies(page = 1) {
  onLoaderVisible();
  const { data } = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  return data;
}
// Запит очікуваних фільмів (що скоро вийдуть на екрани)
export async function fetchUpcomingMovies(page = 1) {
  onLoaderVisible();
  const { data } = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
  return data;
}
// Запит фільмів, що зараз доступні у кінотеатрах
export async function fetchNowPlayingMovies(page = 1) {
  onLoaderVisible();
  const { data } = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
  return data;
}
// Запит схожих фільмів за ідентифікатором
export async function fetchSimilarMoviesById(movie_id, page = 1) {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`);
  return data;
}
// Запит відео-роликів фільму за ідентифікатором
export async function fetchSimilarMoviesById(movie_id) {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`);
  return data;
}
