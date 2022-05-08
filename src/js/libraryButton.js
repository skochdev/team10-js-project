import fetchGenres from './fetchGenres';
import getRefs from './get-refs';
import renderTrending from './renderTrending';
import nothing_here_yet from './nothing_here_yet';

const illustration_markup = nothing_here_yet();

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  const refs = getRefs();
  const genres = localStorage.getItem('genre_ids')
    ? JSON.parse(localStorage.getItem('genre_ids'))
    : fetchGenres();
  if (localStorage.getItem(storage)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(storage)), genres);
    return;
  } else {
    refs.mainRef.innerHTML = illustration_markup; // додає картинку, якщо в біблотеці пусто
    console.info(`Your ${storage} library is empty!`);
  }
}
