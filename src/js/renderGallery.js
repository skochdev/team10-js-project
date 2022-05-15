import getRefs from './get-refs';
import renderMovieCard from './renderMovieCard';

export default function renderGallery(films_array) {
  const refs = getRefs();
  const markup = films_array.map(element => renderMovieCard(element)).join('');
  refs.gallery.innerHTML = markup;
}