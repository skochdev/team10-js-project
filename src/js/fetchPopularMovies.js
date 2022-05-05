import axios from 'axios';
import { API_KEY } from './api';

export default async function fetchPopularMovies(page = 1) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );

  return data;
}
