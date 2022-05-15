import getRefs from './get-refs';
import renderTrending from './renderTrending';
import { fetchTrendingMovies } from './api';
import addDataToLocalStorage from './addDataToLocalStorage';
import onScroll from './scrollUpBtn';
import renderingPlaceholder from './renderingPlaceholder';
import { pagination, paginationSettings } from './pagination';
import onLoaderHidden from './onLoaderHidden';
import onLoaderVisible from './onLoaderVisible';
import onHeaderHomeBtnClick from './header-my-library';
import renderMainPage from './renderMainPage';

const refs = getRefs();

export default function renderMainPageWeek() {
fetchTrendingMovies(paginationSettings.startPage, 'week').then(response => {
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

    refs.filterBtnWeekly.classList.add('active');
    refs.filterBtnDaily.classList.remove('active');

    onLoaderHidden();
  })
  .catch(error => console.log(error));
}

refs.homeRef.addEventListener('click', renderMainPage);
refs.logoRef.addEventListener('click', renderMainPage);
refs.filterBtnDaily.addEventListener('click', renderMainPage);
refs.filterBtnWeekly.addEventListener('click', renderMainPageWeek);

