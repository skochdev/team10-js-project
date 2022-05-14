import getGenres from './getGenres';
import fetchGenres from './fetchGenres';
import empty from '../images/no-image-placeholder.svg';

// картка фільму головної сторінки, передається об'єкт фільму
export default function renderMovieCard(film) {
  const genres = localStorage.getItem('genre_ids')
    ? JSON.parse(localStorage.getItem('genre_ids'))
    : fetchGenres();
  let genre = '';
  let poster = '';
  let releaseYear = 'Year Not Available';
  if (film.genre_ids.length === 0) {
    genre = 'Genre Not Available';
  } else if (film.genre_ids.length > 3) {
    genre = getGenres(film.genre_ids.slice(0, 2), genres) + ', Other';
  } else {
    genre = getGenres(film.genre_ids, genres);
  }
  if (!film.title) {
    if (film.original_title) {
      film.title = film.original_title;
    } else if (film.name) {
      film.title = film.name;
    } else if (film.original_name) {
      film.title = film.original_name;
    } else {
      film.title = 'Title Not Available';
    }
  }
  if (film.release_date) {
    releaseYear = film.release_date.slice(0, 4);
  }
  if (!film.poster_path) {
    poster = empty;
  } else {
    poster = 'https://image.tmdb.org/t/p/w342' + film.poster_path;
  }
  return `<li class="movie__item" data-id="${film.id}">
      <a href="#" class="movie__link" data-id="${film.id}">
        <div class="thumb">
          <img class="movie__poster"
            src="${poster}"
            alt="${film.title} Poster"
            loading="lazy"
          />
          <div class="overlay">
          <p class="overlay-text">${film.overview}</p>
          </div>
        </div>
        <div class="movie__caption">
          <h2 class="movie__title">${film.title}</h2>
          <p class="movie__genre">${genre} | ${releaseYear} <span class="movie__vote movie__vote--position">${film.vote_average.toFixed(1)}</span></p>
        </div>
      </a>
  </li>`;
}
