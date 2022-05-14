import getRefs from './get-refs';
import fetchGenres from './fetchGenres';

const refs = getRefs();
// перелік жанрів для виведення до бічної панелі сортування бібліотеки фільмів
export default function renderGenres() {
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  const markup = '<li class="sidebar__item"><a class="sidebar__link sidebar__link--active" href="#" data-genreId="all">All</a></li>' + genres.map(element => {
    return `<li class="sidebar__item">
    <a class="sidebar__link" href="#" data-genreId="${element.id}">${element.name}</a>
  </li>`;
  }).join('');
  document.querySelector('.sidebar__list-genres').innerHTML = markup;
}