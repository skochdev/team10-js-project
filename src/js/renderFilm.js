export function renderFilm(container, film, genres) {
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
  if (!film.vote_count) {
    film.vote_average = 'Not Available';
    film.vote_count = 'Not Available';
  }
  if (!film.popularity) {
    film.popularity = 'Not Available';
  }
  if (!film.original_title) {
    film.original_title = 'Not Available';
  }
  const markup = `<div class="film__card">
    <img class="film__poster"
      srcset="https://image.tmdb.org/t/p/w342${film.poster_path} 342w, https://image.tmdb.org/t/p/w500${film.poster_path} 500w"
      sizes="(max-width: 1023px) 342px, 500px"
      src="https://image.tmdb.org/t/p/w500${film.poster_path}"
      alt="${title} Poster"
    />
    <div class="film__caption">
    <h2 class="film__title">${film.title}</h2>
      <ul class="film__list">
        <li class="film__item">
          <p class="film__item-caption">Vote / Votes</p>
          <p><span class="film__vote">${vote_average}</span>/<span class="film__votes">${vote_count}</span></p>
        </li>
        <li class="film__item">
          <p class="film__item-caption">Popularity</p>
          <p class="film__popularity">${popularity}</p>
        </li>
        <li class="film__item">
          <p class="film__item-caption">Original Title</p>
          <p class="film__original-title">${original_title}</p>
        </li>
        <li class="film__item">
          <p class="film__item-caption">Genre</p>
      <p class="film__genre">{{genre_ids}}</p>
      {{/if}}
      {{#unless genre_ids}}
      <p class="film__na">Not Available</p>
      {{/unless}}
    <h3 class="film__about-caption">About</h3>
    {{#if overview}}
    <p class="film__about">{{overview}}</p>
    {{/if}}
    {{#unless overview}}
    <p class="film__na">Not Available</p>
    {{/unless}}
    <div class="film__buttons">
      <button class="film__button film__watched" type="button">Add to watched</button>
      <button class="film__button film__queue" type="button">Add to queue</button>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', markup);
}