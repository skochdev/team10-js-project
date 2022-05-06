import getRefs from './get-refs';
import renderTrending from './renderTrending';
import fetchKeyWord from './fetchKeyWord';

const refs = getRefs();
let searchQuery = '';

refs.headerFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  searchQuery = refs.headerFormRef.searchQuery.value;

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
}

function onFetchMovieError() {
  console.log('Search result not successful. Enter the correct movie name and');
}
