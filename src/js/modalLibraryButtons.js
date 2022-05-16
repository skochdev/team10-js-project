import addFilm from './addFilm';
import deleteFilm from './deleteFilm';
import isFilmInStorage from './isFilmInStorage';
import getRefs from './get-refs';
import renderGallery from './renderGallery';
import nothing_here from './nothing_here';

const refs = getRefs();

export default function modalButton(event) {
  const id = event.target.closest('.film__card').dataset.indexNumber;
  const buttonArr = event.target.textContent.split(' ');
  const storage = buttonArr[buttonArr.length - 1];
  const selector = ".film__" + storage;
  const deleteText = "Delete from " + storage;
  const addText = "Add to " + storage;
  let libButtonRef = refs.libWatchedBtn;
  if (storage === 'queue') {
    libButtonRef = refs.libQueueBtn;
  }
  if (!localStorage.getItem(storage) || !isFilmInStorage(storage, id)) {
    addFilm(storage, id);
    document.querySelector(selector).textContent = deleteText;
  } else {
    deleteFilm(storage, id);
    document.querySelector(selector).textContent = addText;
  }
  if (!refs.libButtons.classList.contains('is-hidden') && libButtonRef.classList.contains('active')) {
    if (localStorage.getItem(storage)) {
      renderGallery(JSON.parse(localStorage.getItem(storage)));
      const votes = refs.gallery.querySelectorAll('.movie__vote');
      votes.forEach(item => item.classList.remove('movie__vote--position'));
    } else {
      refs.gallery.innerHTML = nothing_here();
    }
  }
}
