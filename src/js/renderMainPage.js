import getRefs from './get-refs';
import renderTrending from './renderTrending';
import { fetchTrendingMovies } from './api';
import addDataToLocalStorage from './addDataToLocalStorage';
import renderingPlaceholder from './renderingPlaceholder';
import { pagination, paginationSettings } from './pagination';
import onLoaderHidden from './onLoaderHidden';
import onHeaderHomeBtnClick from './header-my-library';
import renderMainPageWeek from './renderMainPageWeek';

const refs = getRefs();

export default function renderMainPage() {
  fetchTrendingMovies(paginationSettings.startPage)
    .then(response => {
      const totalItems = response.total_results;
      const page = response.page;
      paginationSettings.searchType = 'popular';
      pagination({ totalItems, page });
      renderTrending(refs.gallery, response.results);
      renderingPlaceholder();
      addDataToLocalStorage(refs.movieKey, response);
      refs.paginationContainer.classList.remove('visually-hidden');
      onHeaderHomeBtnClick();
      refs.libQueueBtn.classList.remove('active');
      refs.libWatchedBtn.classList.add('active');
      refs.filterBtnDaily.classList.add('active');
      refs.filterBtnWeekly.classList.remove('active');

      onLoaderHidden();
    })
    .catch(error => console.log(error));
}

refs.homeRef.addEventListener('click', renderMainPage);
refs.logoRef.addEventListener('click', renderMainPage);
refs.filterBtnDaily.addEventListener('click', renderMainPage);
refs.filterBtnWeekly.addEventListener('click', renderMainPageWeek);
