import getRefs from './get-refs';
import renderMovieCard from './renderMovieCard';

export default function renderTrending(container, films_array, genres) {
  const refs = getRefs();
  let markup = '';
  if (!refs.libButtons.classList.contains('is-hidden')) {
    markup = films_array.map(element => renderMovieCard(element, genres, 'library')).join('');
  } else {
    markup = films_array.map(element => renderMovieCard(element, genres)).join('');
  }
  container.innerHTML = markup;
}