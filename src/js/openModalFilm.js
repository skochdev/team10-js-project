import getRefs from './get-refs'
import renderMovie from './renderMovie';
import { modalQueueButton, modalWatchedButton } from './modalLibraryButtons';
import isFilmInStorage from './isFilmInStorage';


const refs = getRefs();

refs.galleryList.addEventListener('click', openCard);
const container = refs.filmModalContainer

export default function openCard(event) {
  let cardId = Number(event.target.parentNode.dataset.id);
  let cardFilm = [];
  if (!refs.libButtons.classList.contains('is-hidden') && refs.libWatchedBtn.classList.contains('active')) {
    cardFilm = JSON.parse(localStorage.getItem('watched'));
  } else if (!refs.libButtons.classList.contains('is-hidden') && refs.libQueueBtn.classList.contains('active')) {
    cardFilm = JSON.parse(localStorage.getItem('queue'));
  } else {
    const cardObj = JSON.parse(localStorage.getItem("currentFilms"));
    cardFilm = cardObj.results;
  }
    const cardIndex = cardFilm.findIndex(item => item.id === cardId);
    const film = cardFilm[cardIndex];
  refs.filmModalBackdrop.classList.remove('is-hidden');

  renderMovie(container, film);
  window.addEventListener('keydown', onEscape);
  if (isFilmInStorage('watched', cardId)) {
  document.querySelector('.film__watched').textContent = 'Delete from watched';
  }
  if (isFilmInStorage('queue', cardId)) {
  document.querySelector('.film__queue').textContent = 'Delete from queue';
  }
  document.querySelector('.film__watched').addEventListener('click', modalWatchedButton);
  document.querySelector('.film__queue').addEventListener('click', modalQueueButton);
}




function onEscape(e) {
    if (e.code === 'Escape') {
        refs.filmModalBackdrop.classList.add('is-hidden');
         container.innerHTML= ''
    }
return
}