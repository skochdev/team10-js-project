// import axios from 'axios';
// import { API_KEY } from './api';
import getRefs from './get-refs';
import '../sass/main.scss';
import fetchPopularMovies from './fetchPopularMovies';

const refs = getRefs;

refs.filterBtn.addEventListener('click', fetchPopularMovies);

refs.filterBtn.classList.add('is-hidden');

// import addDataToLocalStorage from './addDataToLocalStorage';

