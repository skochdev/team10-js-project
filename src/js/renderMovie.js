import { getGenres } from "./getGenres";

export function renderMovie(container, film, genres) {
  let genre = '';
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
  if (!film.poster_path) {
    film.poster_path = "/rTjDoLo2eTggYVGNPKjfAX9SqT5.jpg";
  }
  if (!film.popularity) {
    film.popularity = 'Not Available';
  }
  if (!film.original_title) {
    film.original_title = 'Not Available';
  }
  if (film.genre_ids.length === 0) {
    genre = 'Not Available';
  } else {
    genre = getGenres(film.genre_ids, genres);
  }
  if (!film.overview) {
    film.overview = 'Not Available';
  }
  const markup = `<div class="film__card">
    <img class="film__poster"
      srcset="https://image.tmdb.org/t/p/w342${film.poster_path} 342w, https://image.tmdb.org/t/p/w500${film.poster_path} 500w"
      sizes="(max-width: 1023px) 342px, 500px"
      src="https://image.tmdb.org/t/p/w500${film.poster_path}"
      alt="${film.title} Poster"
    />
    <div class="film__caption">
      <h2 class="film__title">${film.title}</h2>
        <ul class="film__list">
          <li class="film__item">
            <p class="film__item-caption">Vote / Votes</p>
            <p><span class="film__vote">${film.vote_average}</span>/<span class="film__votes">${film.vote_count}</span></p>
          </li>
          <li class="film__item">
            <p class="film__item-caption">Popularity</p>
            <p class="film__popularity">${film.popularity}</p>
          </li>
          <li class="film__item">
            <p class="film__item-caption">Original Title</p>
            <p class="film__original-title">${film.original_title}</p>
          </li>
          <li class="film__item">
            <p class="film__item-caption">Genre</p>
            <p class="film__genre">${genre}</p>
          </li>
        </ul>
        <p class="film__about-caption">About</p>
        <p class="film__about">${film.overview}</p>
        <div class="film__buttons">
          <button class="film__button film__watched" type="button">Add to watched</button>
          <button class="film__button film__queue" type="button">Add to queue</button>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', markup);
}