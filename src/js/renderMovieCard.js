import getGenres from './getGenres';
import fetchGenres from './fetchGenres';
import empty from '../images/no-image-placeholder.svg';

// картка фільму головної сторінки, передається об'єкт фільму та у разі потреби mode='library'
export default function renderMovieCard(film) {
  const genres = localStorage.getItem('genre_ids') ? JSON.parse(localStorage.getItem('genre_ids')) : fetchGenres();
  let genre = '';
  let poster = '';
  if (film.genre_ids.length === 0) {
    genre = 'Genre Not Available';
  } else if (film.genre_ids.length > 3) {
    genre = getGenres(film.genre_ids.slice(0, 2), genres) + ', Other';
  } else {
    genre = getGenres(film.genre_ids, genres);
  }
  if (!film.title) {
    if (film.original_title) {
      film.title = film.original_title;
    } else if (film.name) {
      film.title = film.name;
    } else if (film.original_name) {
      film.title = film.original_name;
    } else {
      film.title = 'Title Not Available';
    }
  }
  if (!film.release_date) {
    film.release_date = 'N/A';
  }
  if (!film.poster_path) {
    poster = empty;
  } else {
    poster = 'https://image.tmdb.org/t/p/w342' + film.poster_path;
  }


      <div class="movie__caption" data-id="${film.id} >


}

  }


