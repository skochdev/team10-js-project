import getRefs from './get-refs';
import renderGallery from './renderGallery';
import nothing_here from './nothing_here';

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  const refs = getRefs();
  if (localStorage.getItem(storage)) {
    renderGallery(JSON.parse(localStorage.getItem(storage)));
    const votes = refs.gallery.querySelectorAll('.movie__vote');
    votes.forEach(item => item.classList.remove('movie__vote--position'));
    return;
  } else {
    refs.gallery.innerHTML = nothing_here();
  }
}
