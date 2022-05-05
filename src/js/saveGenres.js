import { fetchGenres } from './fetchGenres';
import { fetchMovies } from './fetchPopularMovies';

export function saveGenresToLocalStorage() {
    return fetchGenres().then(data => {
    localStorage.setItem("genre_ids", JSON.stringify(data));
})
}


// import { getGenres } from './getGenres';
// const parsedGenres = JSON.parse(localStorage.getItem("genre_ids"));

// const test = document.querySelector('.test');


// fetchMovies().then(data => {
//     const filmList = data.map(markup).join('');
//     test.insertAdjacentHTML('beforeend', filmList);
// });

// const markup = (elem) => {
//     return `<div class="film__card">
//     <img class="film__poster"
//       srcset="https://image.tmdb.org/t/p/w342${elem.poster_path} 342w, https://image.tmdb.org/t/p/w500${elem.poster_path} 500w"
//       sizes="(max-width: 1023px) 342px, 500px"
//       src="https://image.tmdb.org/t/p/w500${elem.poster_path}"
//       alt="${elem.title} Poster"
//     />
//     <div class="film__caption">
//       <h2 class="film__title">${elem.title}</h2>
//         <ul class="film__list">
//           <li class="film__item">
//             <p class="film__item-caption">Vote / Votes</p>
//             <p><span class="film__vote">${elem.vote_average}</span>/<span class="film__votes">${elem.vote_count}</span></p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Popularity</p>
//             <p class="film__popularity">${elem.popularity}</p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Original Title</p>
//             <p class="film__original-title">${elem.original_title}</p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Genre</p>
//             <p class="film__genre">${getGenres(elem.genre_ids, parsedGenres)}</p>
//           </li>
//         </ul>
//         <p class="film__about-caption">About</p>
//         <p class="film__about">${elem.overview}</p>
//         <div class="film__buttons">
//           <button class="film__button film__watched" type="button">Add to watched</button>
//           <button class="film__button film__queue" type="button">Add to queue</button>
//         </div>
//       </div>
//     </div>
//   `;
// }



