import './sass/main.scss';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import fetchPopularMovies from './js/fetchPopularMovies';
import renderTrending from './js/renderTrending';
import getRefs from './js/get-refs';

const REFS = getRefs();

saveGenresToLocalStorage();

fetchPopularMovies().then(data => {
    return renderTrending(REFS.galleryRef, data, REFS.parsedGenresRef)
})



