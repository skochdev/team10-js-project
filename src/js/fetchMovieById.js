import { API_KEY } from './api';
import axios from 'axios';

export default async function fetchMovieById(movie_id) {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
  return data;
}
