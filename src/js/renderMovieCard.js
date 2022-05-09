import getGenres from './getGenres';
import fetchGenres from './fetchGenres';
import empty from '../images/no-image-placeholder.svg';

// картка фільму головної сторінки, передається об'єкт фільму та у разі потреби mode='library'
export default function renderMovieCard(film, mode) {
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  let genre = '';
  let poster = '';
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
  if (!film.release_date) {
    film.release_date = 'N/A';
  }
  if (!film.poster_path) {
    poster = empty;
  } else {
    poster = 'https://image.tmdb.org/t/p/w342' + film.poster_path;
  }
  if (mode !== 'library') {
    return `<li class="movie__item" data-index-number="${film.id}">
    <a href="#" class="movie__link" data-id="${film.id}">
      <img class="movie__poster"
        src="${poster}"
        alt="${film.title} Poster"
      />
      <div class="movie__caption">
        <h2 class="movie__title">${film.title}</h2>
        <p class="movie__genre">${genre} | ${film.release_date.slice(0, 4)} <span class="movie__vote visually-hidden">${film.vote_average.toFixed(1)}</p>
      </div>
    </a>
  </li>`;
  } else {

    return `<li class="movie__item" data-index-number="${film.id}">
    <a href="#" class="movie__link" data-id="${film.id}">
      <img class="movie__poster"
        src="${poster}"
        alt="${film.title} Poster"
      />
      <div class="movie__caption">
        <h2 class="movie__title">${film.title}</h2>
        <p class="movie__genre">${genre} | ${film.release_date.slice(0, 4)} <span class="movie__vote">${film.vote_average.toFixed(1)}</p>
      </div>
    </a>

  </li>`;
  }
}
