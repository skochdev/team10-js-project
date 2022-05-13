export default function isFilmInStorage(storage, film_id) {
  const array = JSON.parse(localStorage.getItem(storage));
  const filtered = array.filter(element => element);
  if (array.length !== filtered.length) {
    localStorage.setItem(storage, JSON.stringify(filtered));
  }
  if (filtered.find(item => item.id === Number(film_id))) return true;
}