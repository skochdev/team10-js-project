import getRefs from "./get-refs";
import fetchGenres from "./fetchGenres";
import fetchMovieById from "./fetchMovieById";

// функції передається рядок 'queue' або 'watched', об'єкт фільму
export default function addFilm(storage, film_id) {
  const refs = getRefs();
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  let array = [];
  const film_obj = (localStorage.getItem('trending')) ? JSON.parse(localStorage.getItem('trending')).find(element => element.id === film_id) : fetchMovieById(film_id);
  if (localStorage.getItem(storage)) {
    array = JSON.parse(localStorage.getItem(storage));
  }
  array.push(film_obj);
  localStorage.setItem(storage, JSON.stringify(array));
  renderTrending(refs.gallery, array, genres);
}
