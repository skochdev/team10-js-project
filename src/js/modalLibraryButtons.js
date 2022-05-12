import addFilm from './addFilm';
import deleteFilm from './deleteFilm';
import isFilmInStorage from './isFilmInStorage';
import getRefs from './get-refs';
import renderTrending from './renderTrending';
import nothing_here from './nothing_here';

const refs = getRefs();

export function modalQueueButton(event) {
  const id = event.target.closest('.film__card').dataset.indexNumber;
  if (!localStorage.getItem('queue') || !isFilmInStorage('queue', id)) {
    addFilm('queue', id);
    document.querySelector('.film__queue').textContent = 'Delete from queue';
  } else {
    deleteFilm('queue', id);
    document.querySelector('.film__queue').textContent = 'Add from queue';
  }
  if (!refs.libButtons.classList.contains('is-hidden') && refs.libQueueBtn.classList.contains('active')) {
    if (localStorage.getItem('queue')) {
      renderTrending(refs.gallery, JSON.parse(localStorage.getItem('queue')));
    } else {
      refs.gallery.innerHTML = nothing_here();
    }
  }
}

export function modalWatchedButton(event) {
  const id = event.target.closest('.film__card').dataset.indexNumber;
  if (!localStorage.getItem('watched') || !isFilmInStorage('watched', id)) {
    addFilm('watched', id);
    document.querySelector('.film__watched').textContent = 'Delete from watched';
  } else {
    deleteFilm('watched', id);
    document.querySelector('.film__watched').textContent = 'Add to watched';
  }
  if (!refs.libButtons.classList.contains('is-hidden') && refs.libWatchedBtn.classList.contains('active')) {
    if (localStorage.getItem('watched')) {
      renderTrending(refs.gallery, JSON.parse(localStorage.getItem('watched')));
    } else {
      refs.gallery.innerHTML = nothing_here();
    }
  }
}