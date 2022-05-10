import getRefs from './get-refs';
import renderTrending from './renderTrending';
import nothing_here from './nothing_here';

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  const refs = getRefs();
  if (localStorage.getItem(storage)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(storage)));
    return;
  } else {
    // refs.mainRef.innerHTML = nothing_here();
    refs.gallery.innerHTML = nothing_here();
    // console.info(`Your ${storage} library is empty!`);
  }
}
