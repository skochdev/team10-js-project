import getRefs from './get-refs';
import fetchPopularMovies from './fetchPopularMovies';

const refs = getRefs;

refs.filterBtn.addEventListener('click', fetchPopularMovies);
