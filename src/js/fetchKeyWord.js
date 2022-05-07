import { API_KEY } from './api';
import axios from 'axios';
import onLoaderVisible from './onLoaderVisible';

export default async function fetchKeyWord(searchQuery, page = 1) {
  onLoaderVisible();
  const response = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}`,
  );
  return response;
}
