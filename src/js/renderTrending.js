import getRefs from './get-refs';
import renderMovieCard from './renderMovieCard';

export default function renderTrending(container, films_array) {
  const refs = getRefs();
  let markup = '';
  markup = films_array.map(element => renderMovieCard(element)).join('');
  container.innerHTML = markup;
}