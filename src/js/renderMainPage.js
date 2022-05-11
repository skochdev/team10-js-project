import getRefs from './get-refs';
import saveGenresToLocalStorage from './saveGenresToLocalStorage';
import renderTrending from './renderTrending';
import fetchPopularMovies from './fetchPopularMovies';
import addTestWatchedQueue from './addTestWatchedQueue';
import addDataToLocalStorage from './addDataToLocalStorage';
import onScroll from './scrollUpBtn';
import renderingPlaceholder from './renderingPlaceholder';

import { pagination, paginationSettings } from './pagination';
import 'tui-pagination/dist/tui-pagination.css';

import onLoaderHidden from './onLoaderHidden';
import onLoaderVisible from './onLoaderVisible';
import onHeaderHomeBtnClick from './header-my-library';

const refs = getRefs();

export default function renderMainPage() {
  console.log('retro');

  fetchPopularMovies(paginationSettings.startPage)
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

      onLoaderHidden();
    })
    .catch(error => console.log(error));
}

refs.homeRef.addEventListener('click', renderMainPage);
refs.logoRef.addEventListener('click', renderMainPage);
