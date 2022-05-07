import getRefs from "./get-refs";
import renderTrending from "./renderTrending";

// функції передається рядок 'queue' або 'watched', об'єкт фільму
export default function deleteFilm(storage, film_id) {
  const array = JSON.parse(localStorage.getItem(storage));
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  const refs = getRefs();
  const indexForDelete = array.findIndex(element => element.id === film_id);
  if (indexForDelete === -1) {
    console.error('Film is absent in ${storage} library!')
    return;
  } else {
    array.splice(indexForDelete, 1);
    if (array.length > 0) {
      localStorage.setItem(storage, JSON.stringify(array));
      renderTrending(refs.gallery, array, genres);
    } else {
      localStorage.removeItem(storage);
      refs.gallery.innerHTML = '';
    }
  }
}
