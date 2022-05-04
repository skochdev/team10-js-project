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
    film.poster_path = "[poster_path]";
  }
  // https://image.tmdb.org/t/p/original/[poster_path]
  const markup = `<div class="film__card">
    <img class="film__poster"
      srcset="${film.poster_path} 300w, ${film.poster_path} 600w, ${film.poster_path} 1200w"
      sizes="(min-width: 1024px) 500px, (min-width: 768px) 300px, 100vw"
      src="${film.poster_path}"
      alt="${title} Poster"
    />
    <div class="film__caption">
      {{#if title}}
      <h2 class="film__title">{{title}}</h2>
      {{/if}}
      {{#unless title}}
        {{#if name}}
        <h2 class="film__title">{{name}}</h2>
        {{/if}}
        {{#unless name}}
        <h2 class="film__title">{{original_title}}</h2>
        {{/unless}}
      {{/unless}}
      <h3 class="film__item-caption">Vote / Votes</h3>
      {{#if vote_count}}
      <p><span class="film__vote">{{vote_average}}</span>/<span class="film__votes">{{vote_count}}</span></p>
      {{/if}}
      {{#unless vote_count}}
      <p class="film__na">Not Available</p>
      {{/unless}}
      <h3 class="film__item-caption">Popularity</h3>
      {{#if popularity}}
      <p class="film__popularity">{{popularity}}</p>
      {{/if}}
      {{#unless popularity}}
      <p class="film__na">Not Available</p>
      {{/unless}}
      <h3 class="film__item-caption">Original Title</h3>
      {{#if original_title}}
      <p class="film__original-title">{{original_title}}</p>
      {{/if}}
      {{#unless original_title}}
      <p class="film__na">Not Available</p>
      {{/unless}}
      <h3 class="film__item-caption">Genre</h3>
      {{#if genre_ids}}
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