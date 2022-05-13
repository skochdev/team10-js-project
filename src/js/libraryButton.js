import getRefs from './get-refs';
import renderTrending from './renderTrending';
import nothing_here from './nothing_here';

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  const refs = getRefs();
  if (localStorage.getItem(storage)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(storage)));
    const votes = refs.gallery.querySelectorAll('.movie__vote');
    votes.forEach(item => item.classList.remove('movie__vote--position'));
    return;
  } else {
    refs.gallery.innerHTML = nothing_here();
  }
}
