export default function isFilmInStorage(storage, film_id) {
  if (JSON.parse(localStorage.getItem(storage)).find(item => item.id === Number(film_id))) return true;
}