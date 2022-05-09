import getRefs from './get-refs';
import photo from '../images/moviedb-logo/moviedb-logo.svg';

const refs = getRefs();

export default function renderingPlaceholder() {
  const markup = `<li class="movie__item">
    <a href="https://www.themoviedb.org/" target="_blank" class="movie__link">
    <img class="movie__poster js-placeholder" src="${photo}" alt="TMDB"/>
      <div class="movie__caption">
      <h2 class="movie__title">This product uses the TMDB API but is not endorsed or certified by TMDB.</h2>
      </div>
    </a>
  </li>`;
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
