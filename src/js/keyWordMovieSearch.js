import getRefs from './get-refs';
import renderTrending from './renderTrending';
import fetchKeyWord from './fetchKeyWord';
import onLoaderHidden from './onLoaderHidden';
import addDataToLocalStorage from './addDataToLocalStorage';

const refs = getRefs();
let searchQuery = '';

refs.headerFormRef.addEventListener('submit', onFormSubmit);

// console.log(refs.errorWindowRef);


function onFormSubmit(evt) {
  evt.preventDefault();
  refs.errorWindowRef.innerHTML = '';
  searchQuery = refs.headerFormRef.searchQuery.value.trim();

  if (searchQuery === '') {
    return;
  }

  fetchKeyWord(searchQuery, 1).then(onFetchMovieRequest).catch(onFetchMovieError);
  refs.headerFormRef.searchQuery.value = '';
}

function onFetchMovieRequest(movies) {
  const moviesArray = movies.data.results;
  const genres = JSON.parse(localStorage.getItem('genre_ids'));

  if (movies.data.total_results === 0) {
    throw new Error(res.status);
  }

  renderTrending(refs.gallery, moviesArray, genres);
  addDataToLocalStorage(refs.movieKey, movies.data);
  onLoaderHidden();
}

function onFetchMovieError() {
  const errorNotification = 'Please, enter the correct movie name and try again';
  onLoaderHidden();

  refs.errorWindowRef.innerHTML = errorNotification;
}
