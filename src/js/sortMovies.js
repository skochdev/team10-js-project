import getRefs from './get-refs';
import '../sass/main.scss';
import fetchPopularMovies from './fetchPopularMovies';

const refs = getRefs;

refs.filterBtn.addEventListener('click', fetchPopularMovies);