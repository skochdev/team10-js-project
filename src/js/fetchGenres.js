import { API_KEY } from './api';
import axios from 'axios';

export default async function fetchGenres() {
  const { data } = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  return data.genres;
}
