import getRefs from './get-refs';

const refs = getRefs();

export default function renderingPlaceholder() {
  const markup = `<li class="movie__item">
    <a href="https://www.themoviedb.org/" target="_blank" class="movie__poster">
    <img class="movie__poster" src="https://res.cloudinary.com/goit-academy/image/upload/v1614773221/codepen/cat_segyum.svg" alt="TMDB"/>
      <div class="movie__caption">
      <h2 class="movie__title">This product uses the TMDB API but is not endorsed or certified by TMDB.</h2>
      </div>
    </a>
  </li>`;
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
