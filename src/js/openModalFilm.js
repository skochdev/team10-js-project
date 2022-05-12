import getRefs from './get-refs'
import renderMovie from './renderMovie';



const refs = getRefs();

refs.galleryList.addEventListener('click', openCard);
const container = refs.filmModalContainer

export default function openCard(event) {
    let cardId = Number(event.target.parentNode.dataset.id);
    const cardObj = JSON.parse(localStorage.getItem("currentFilms"));
    const cardFilm = cardObj.results;
    const cardIndex = cardFilm.findIndex(item => item.id === cardId);
    const film = cardFilm[cardIndex];
    refs.filmModalBackdrop.classList.remove('is-hidden');
    
 renderMovie(container, film)
    window.addEventListener('keydown', onEscape);
  
}




function onEscape(e) {
    if (e.code === 'Escape') {
        refs.filmModalBackdrop.classList.add('is-hidden');
         container.innerHTML= ''
    }
return
}