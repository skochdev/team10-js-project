import axios from "axios";
import { API_KEY } from './api';

export async function fetchMovies() {
    const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    
  return data.results;
}

