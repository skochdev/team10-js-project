import fetchGenres from "./fetchGenres";
import getRefs from "./get-refs";
import renderTrending from "./renderTrending";

export default function onQueueClick() {
  refs = getRefs();
  const STORAGE_KEY = 'queue';
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  if (localStorage.getItem(STORAGE_KEY)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(STORAGE_KEY)), genres);
    return;
  } else {
    console.info('Your Movie Queue is empty!');
  }
}