import getRefs from "./get-refs";
import fetchGenres from "./fetchGenres";

// функції передається рядок 'queue' або 'watched', об'єкт фільму
export default function addFilm(storage, film_obj) {
  const refs = getRefs();
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  let array = [];
  if (localStorage(storage)) {
    array = JSON.parse(localStorage.getItem(storage));
  }
  array.push(film_obj);
  localStorage.setItem(storage, JSON.stringify(array));
  renderTrending(refs.gallery, array, genres);

}
