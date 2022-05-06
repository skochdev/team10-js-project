import getRefs from './get-refs';
import renderTrending from './renderTrending';
import fetchKeyWord from './fetchKeyWord';
import onLoaderHidden from './onLoaderHidden';

const refs = getRefs();
let searchQuery = '';

refs.headerFormRef.addEventListener('submit', onFormSubmit);
console.log(refs.errorWindowRef);

function onFormSubmit(evt) {
  evt.preventDefault();
  refs.errorWindowRef.innerHTML = '';
  searchQuery = refs.headerFormRef.searchQuery.value;

  if (searchQuery === '') {
    return;
  }

  fetchKeyWord(searchQuery, 1).then(onFetchMovieRequest).catch(onFetchMovieError).finally(onLoaderHidden);
  refs.headerFormRef.searchQuery.value = '';
}

function onFetchMovieRequest(movies) {
  const moviesArray = movies.data.results;
  const genres = JSON.parse(localStorage.getItem('genre_ids'));

  if (movies.data.total_results === 0) {
    throw new Error(res.status);
  }

  renderTrending(refs.gallery, moviesArray, genres);
}

function onFetchMovieError() {
  const errorNotification = 'Search result not successful. Enter the correct movie name and';

  refs.errorWindowRef.innerHTML = errorNotification;
}
