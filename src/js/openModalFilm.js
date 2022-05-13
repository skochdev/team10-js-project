import getRefs from './get-refs';
import renderMovie from './renderMovie';
import { modalQueueButton, modalWatchedButton } from './modalLibraryButtons';
import isFilmInStorage from './isFilmInStorage';
import setBodyOverflow from './footer-modal';
import onScroll from './scrollUpBtn';

const refs = getRefs();

refs.galleryList.addEventListener('click', openCard);
const container = refs.filmModalContainer;

export default function openCard(event) {
  refs.filmModalCloseBtn.addEventListener('click', onFilmModalClose);

  if (!event.target.closest('.movie__item')) return;
  if (!event.target.closest('.movie__item').dataset.id) return;
  refs.goTopBtn.classList.remove('show'); // убирает кнопку ВВЕРХ при отркрытии модалки
  setBodyOverflow('hidden'); // выключает скролл на body, когда модалка открыта
  event.preventDefault();

  let cardId = Number(event.target.closest('.movie__item').dataset.id);
  let cardFilm = [];

  if (
    !refs.libButtons.classList.contains('is-hidden') &&
    refs.libWatchedBtn.classList.contains('active')
  ) {
    cardFilm = JSON.parse(localStorage.getItem('watched'));
  } else if (
    !refs.libButtons.classList.contains('is-hidden') &&
    refs.libQueueBtn.classList.contains('active')
  ) {
    cardFilm = JSON.parse(localStorage.getItem('queue'));
  } else {
    cardFilm = JSON.parse(localStorage.getItem('currentFilms')).results;
  }
  const cardIndex = cardFilm.findIndex(item => item.id === cardId);
  const film = cardFilm[cardIndex];

  refs.filmModalBackdrop.classList.remove('is-hidden');
  renderMovie(container, film);
  window.addEventListener('keydown', onEscape);

  if (localStorage.getItem('watched')) {
    if (isFilmInStorage('watched', cardId)) {
      document.querySelector('.film__watched').textContent = 'Delete from watched';
    }
  }
  if (localStorage.getItem('queue')) {
    if (isFilmInStorage('queue', cardId)) {
      document.querySelector('.film__queue').textContent = 'Delete from queue';
    }
  }
  document.querySelector('.film__watched').addEventListener('click', modalWatchedButton);
  document.querySelector('.film__queue').addEventListener('click', modalQueueButton);
  refs.filmModalBackdrop.addEventListener('click', onBackdropClick);
}

function onFilmModalClose() {
  refs.filmModalCloseBtn.removeEventListener('click', onFilmModalClose);
  window.removeEventListener('keydown', onEscape);
  setBodyOverflow('auto');
  refs.filmModalBackdrop.classList.add('is-hidden');
}

function onEscape(e) {
  if (e.code === 'Escape') {
    refs.filmModalBackdrop.classList.add('is-hidden');
    container.innerHTML = '';
    // включает обратно скролл на body, когда модалка закрывается
    setBodyOverflow('auto');
    // включает кнопку ВВЕРХ при закрытии модалки, проверяя высоту
    if (window.pageYOffset > document.documentElement.clientHeight) {
      refs.goTopBtn.classList.add('show');
    }
  }
  return;
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    if (window.pageYOffset > document.documentElement.clientHeight) {
      refs.goTopBtn.classList.add('show');
    }
    refs.filmModalBackdrop.classList.add('is-hidden');
    container.innerHTML = '';
    // включает обратно скролл на body, когда модалка закрывается
    setBodyOverflow('auto');
    refs.filmModalBackdrop.removeEventListener('click', onBackdropClick);
  }
}
