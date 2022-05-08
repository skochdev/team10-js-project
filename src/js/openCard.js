import getRefs from './get-refs'
import  getGenres  from './getGenres';



const refs = getRefs();

refs.galleryList.addEventListener('click', openCard);

export default function openCard(event) {
    let cardId = Number(event.target.parentNode.dataset.id);
    const cardObj = JSON.parse(localStorage.getItem("trending"));
    const cardFilm = cardObj.results;
    const cardIndex = cardFilm.findIndex(item => item.id === cardId);
    const film = cardFilm[cardIndex];
console.log(film)
  
    console.log(event.target.parentNode)
   
  
}
    





   
 



