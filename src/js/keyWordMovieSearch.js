import getRefs from './get-refs';
import renderTrending from './renderTrending';
import renderingPlaceholder from './renderingPlaceholder';
import fetchKeyWord from './fetchKeyWord';
import onLoaderHidden from './onLoaderHidden';
import addDataToLocalStorage from './addDataToLocalStorage';
import { pagination, paginationSettings } from './pagination';
import { debounce, throttle } from 'lodash';
import '../sass/main.scss';

const refs = getRefs();
let searchQuery = '';
let timeOut = null;

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
  renderingPlaceholder();
  addDataToLocalStorage(refs.movieKey, movies.data);
  onLoaderHidden();
}

function onFetchMovieError() {
  const errorNotification = 'Please, enter the correct movie name and try again' ;
  onLoaderHidden();

  refs.headerFormRef.classList.add('is-visible')
  refs.headerFormRef.classList.remove('out-visible')

  timeOut = setTimeout(() => { errorNotification; hideErrorNotification()}, 3000)
 
  refs.errorWindowRef.innerHTML = errorNotification;  
}

function hideErrorNotification() {
  refs.headerFormRef.classList.add('out-visible')
  refs.headerFormRef.classList.remove('is-visible')
}