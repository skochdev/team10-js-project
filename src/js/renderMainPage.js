import getRefs from './get-refs';
import renderGallery from './renderGallery';
import { fetchTrendingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchUpcomingMovies, fetchNowPlayingMovies } from './api';
import addDataToLocalStorage from './addDataToLocalStorage';
import renderingPlaceholder from './renderingPlaceholder';
import { pagination, paginationSettings } from './pagination';
import onLoaderHidden from './onLoaderHidden';
import onHeaderHomeBtnClick from './header-my-library';

const refs = getRefs();

export default function renderMainPage(mode = 'day') {
  if (mode === 'day') {
    fetchTrendingMovies(paginationSettings.startPage)
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        refs.filterBtnDaily.classList.add('filter__btn--active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  } else if (mode === 'week') {
    fetchTrendingMovies(paginationSettings.startPage, 'week')
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  } else if (mode === 'topRated') {
    fetchTopRatedMovies(paginationSettings.startPage)
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  } else if (mode === 'popular') {
    fetchPopularMovies(paginationSettings.startPage)
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  } else if (mode === 'upcoming') {
    fetchUpcomingMovies(paginationSettings.startPage)
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  } else {
    fetchNowPlayingMovies(paginationSettings.startPage)
      .then(response => {
        const totalItems = response.total_results;
        const page = response.page;
        paginationSettings.searchType = 'popular';
        pagination({ totalItems, page });
        renderGallery(response.results);
        renderingPlaceholder();
        addDataToLocalStorage(refs.movieKey, response);
        refs.paginationContainer.classList.remove('visually-hidden');
        onHeaderHomeBtnClick();
        // refs.libQueueBtn.classList.remove('active');
        // refs.libWatchedBtn.classList.add('active');
        onLoaderHidden();
      })
      .catch(error => console.log(error));
  }
}

refs.homeRef.addEventListener('click', renderMainPage);
refs.logoRef.addEventListener('click', renderMainPage);
refs.filterList.addEventListener('click', onFilterClick);

function onFilterClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const currentBtn = event.target;
  const previousBtn = document.querySelector('.filter__btn--active');
  const mode = event.target.dataset.action;
  renderMainPage(mode);
  changeActiveButton(currentBtn, previousBtn);
}

function changeActiveButton(current, previous) {
  console.log(previous, current);
  previous.classList.remove('filter__btn--active');
  current.classList.add('filter__btn--active');
}