import getRefs from "./get-refs";
import renderTrending from "./renderTrending";

// функції передається рядок 'queue' або 'watched', ідентифікатор фільму
export default function deleteFilm(storage, film_id) {
  const array = JSON.parse(localStorage.getItem(storage));
  const refs = getRefs();
  const indexForDelete = array.findIndex(element => element.id === Number(film_id));
  if (indexForDelete === -1) {
    console.error(`Film is absent in ${storage} library!`)
    return;
  } else {
    array.splice(indexForDelete, 1);
    if (array.length > 0) {
      localStorage.setItem(storage, JSON.stringify(array));
    } else {
      localStorage.removeItem(storage);
    }
  }
}
