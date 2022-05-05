import { renderMovieCard } from './renderMovieCard';

export default function renderTrending(container, films_array, genres) {
  const markup = films_array.map(element => renderMovieCard(element, genres)).join('');
  container.innerHTML = `<ul class="movie__list">${markup}</ul>`;
}
