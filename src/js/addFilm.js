import getRefs from "./get-refs";
import fetchMovieById from "./fetchMovieById";

// функції передається рядок 'queue' або 'watched', ідентифікатор фільму
export default function addFilm(storage, film_id) {
  const refs = getRefs();
  let array = [];
  let film_obj = {};
  if (localStorage.getItem(refs.movieKey)) {
    film_obj = JSON.parse(localStorage.getItem(refs.movieKey)).find(element => element.id === film_id);
  } else {
    const fetchedObj = fetchMovieById(film_id);
    fetchedObj.genre_ids = fetchedObj.genres.map(item => item.id);
    film_obj = fetchedObj;
  }
  if (localStorage.getItem(storage)) {
    array = JSON.parse(localStorage.getItem(storage));
  }
  array.push(film_obj);
  localStorage.setItem(storage, JSON.stringify(array));
  renderTrending(refs.gallery, array);
}
