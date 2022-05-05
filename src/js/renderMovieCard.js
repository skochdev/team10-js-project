import { getGenres } from "./getGenres";

export function renderMovie(container, film, genres) {
  let genre = '';
  if (film.genre_ids.length === 0) {
    genre = 'Not Available';
  } else if (film.genre_ids.length > 3) {
    genre = getGenres(film.genre_ids.slice(0,2), genres) + ', Other';
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
      film.title = 'Not Available';
    }
  }
  if (!film.release_date) {
    film.release_date = '';
  }
  if (!film.poster_path) {
    film.poster_path = "/rTjDoLo2eTggYVGNPKjfAX9SqT5.jpg";
  }
  const markup = `<div class="movie__card">
    <img class="film__poster"
      src="https://image.tmdb.org/t/p/w342${film.poster_path}"
      alt="${film.title} Poster"
    />
    <div class="film__caption">
      <h2 class="film__title">${film.title}</h2>
      <p class="film__genre">${genre} | ${release_date.slice(0, 4)}</p>
      <p class="film__popularity">${film.popularity.toFixed(1)}</p>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', markup);
}