import getRefs from './get-refs';
import saveGenresToLocalStorage from './saveGenresToLocalStorage';
import renderGallery from './renderGallery';
import { fetchTrendingMovies } from './api';
import addDataToLocalStorage from './addDataToLocalStorage';
import onScroll from './scrollUpBtn';
import renderingPlaceholder from './renderingPlaceholder';
import renderMainPageWeek from './renderMainPageWeek';

import { pagination, paginationSettings } from './pagination';

import onLoaderHidden from './onLoaderHidden';
import onLoaderVisible from './onLoaderVisible';
import onHeaderHomeBtnClick from './header-my-library';

const refs = getRefs();

export default function renderMainPage() {
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
      refs.libQueueBtn.classList.remove('active');
      refs.libWatchedBtn.classList.add('active');

      onLoaderHidden();
    })
        .catch(error => console.log(error));

}

refs.homeRef.addEventListener('click', renderMainPage);
refs.logoRef.addEventListener('click', renderMainPage);

refs.filterBtnDaily.addEventListener('click', renderMainPage);
refs.filterBtnWeekly.addEventListener('click', renderMainPageWeek);

