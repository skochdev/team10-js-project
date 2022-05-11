import axios from 'axios';
import { API_KEY } from './api';
import getRefs from './get-refs';
import '../sass/main.scss';

import addDataToLocalStorage from './addDataToLocalStorage';


const refs = getRefs();

const r = fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

console.log(r);

// fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(data => console.log(data))