import getRefs from './get-refs';
import renderTrending from './renderTrending';
import fetchKeyWord from './fetchKeyWord';
import onLoaderHidden from './onLoaderHidden';
import addDataToLocalStorage from './addDataToLocalStorage';
import { pagination, paginationSettings } from './pagination';

const refs = getRefs();
let searchQuery = '';

refs.headerFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  refs.errorWindowRef.innerHTML = '';

  searchQuery = refs.headerFormRef.searchQuery.value.trim();
  addDataToLocalStorage('searchQuery', searchQuery);


  if (searchQuery === '') {
    return;
  }

  fetchKeyWord(searchQuery, paginationSettings.startPage)
    .then(onFetchMovieRequest)
    .catch(onFetchMovieError);

  refs.headerFormRef.searchQuery.value = '';
}

function onFetchMovieRequest(movies) {
  paginationSettings.searchType = 'keyWord';
  const moviesArray = movies.data.results;
  const totalItems = movies.data.total_results;
  const page = movies.data.page;

  pagination({ totalItems, page });

  if (totalItems === 0) {
    throw new Error(res.status);
  }

  renderTrending(refs.gallery, moviesArray);
  addDataToLocalStorage(refs.movieKey, movies.data);
  onLoaderHidden();
}

function onFetchMovieError() {
  const errorNotification = 'Please, enter the correct movie name and try again';
  onLoaderHidden();

  refs.errorWindowRef.innerHTML = errorNotification;
}
