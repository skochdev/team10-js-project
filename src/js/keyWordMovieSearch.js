import getRefs from './get-refs';
import renderGallery from './renderGallery';
import renderingPlaceholder from './renderingPlaceholder';
import { fetchKeyWord } from './api';
import renderMainPage from './renderMainPage';
import onLoaderHidden from './onLoaderHidden';
import addDataToLocalStorage from './addDataToLocalStorage';
import { pagination, paginationSettings } from './pagination';

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
  const moviesArray = movies.results;
  const totalItems = movies.total_results;
  const page = movies.page;

  pagination({ totalItems, page });

  if (totalItems === 0) {
    throw new Error(res.status);
  }

  renderGallery(movies.results);
  renderingPlaceholder();
  addDataToLocalStorage(refs.movieKey, movies);
  refs.mainRef.querySelector('.filter__btn--active').classList.remove('filter__btn--active');
  refs.filterBtnDaily.classList.add('filter__btn--active');
  onLoaderHidden();
}

function onFetchMovieError() {
  const errorNotification = 'Please, enter the correct movie name and try again';
  renderMainPage('day');
  onLoaderHidden();

  // after wrong query, this will take off the active class from selected filter button, and set to "Today"
  document.querySelector('.filter__btn--active').classList.remove('filter__btn--active');
  refs.filterBtnDaily.classList.add('filter__btn--active');

  refs.errorWindowRef.classList.add('is-visible');
  refs.errorWindowRef.classList.remove('out-visible');

  timeOut = setTimeout(() => {
    errorNotification;
    hideErrorNotification();
  }, 3000);

  refs.errorWindowRef.innerHTML = errorNotification;
}

function hideErrorNotification() {
  refs.errorWindowRef.classList.add('out-visible');
  refs.errorWindowRef.classList.remove('is-visible');
}
