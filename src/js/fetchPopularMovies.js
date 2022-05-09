import axios from 'axios';
import { API_KEY } from './api';
import onLoaderVisible from './onLoaderVisible';

export default async function fetchPopularMovies(page) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
  onLoaderVisible();
  return data;
}
