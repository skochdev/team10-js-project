import fetchGenres from "./fetchGenres";
import getRefs from "./get-refs";
import renderTrending from "./renderTrending";

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  refs = getRefs();
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  if (localStorage.getItem(storage)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(storage)), genres);
    return;
  } else {
    refs.gallery.innerHTML = '';
    console.info('Your ${storage} library is empty!');
  }
}