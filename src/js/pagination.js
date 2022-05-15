import getRefs from './get-refs';
import Pagination from 'tui-pagination';
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
} from './api';
import { fetchKeyWord } from './api';
import renderGallery from './renderGallery';
import addDataToLocalStorage from './addDataToLocalStorage';
import onLoaderHidden from './onLoaderHidden';
import onLoaderVisible from './onLoaderVisible';
import renderingPlaceholder from './renderingPlaceholder';
import icons from '../images/icons.svg';

const refs = getRefs();
const arrowPrev = `${icons}#icon-arrow-prev`;
const arrowNext = `${icons}#icon-arrow-next`;
const dots = `${icons}#icon-dots`;

export const paginationSettings = {
  startPage: 1,
  searchType: '',
};

export const pagination = ({ totalItems, page }) => {
  const searchQuery = localStorage.getItem('searchQuery');
  const searchQueryParse = JSON.parse(searchQuery);
  let currentPage;
  const options = {
    totalItems,
    totalPages: Math.ceil(totalItems / 20),
    itemsPerPage: 20,
    visiblePages: 5,
    page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: type => {
        let template = '';

        if (type.type === 'first') {
          template =
            '<a href="#" class="tui-page-btn tui-first hide-first ">' +
            '<span class="tui-ico-{{type}}">1</span>' +
            '</a>';
        }

        if (type.type === 'last') {
          template =
            '<a href="#" class="tui-page-btn tui-last">' +
            '<span class="tui-ico-{{type}}">' +
            options.totalPages +
            '</span>' +
            '</a>';
        }

        if (type.type === 'last' && options.totalPages < 7) {
          template =
            '<a href="#" class="tui-page-btn tui-last hide-last">' +
            '<span class="tui-ico-{{type}}">' +
            options.totalPages +
            '</span>' +
            '</a>';
        }

        if (type.type === 'prev') {
          template =
            '<a href="#" class="tui-page-btn tui-prev">' +
            `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowPrev}"></use></svg>` +
            '</a>';
        }

        if (type.type === 'next') {
          template =
            '<a href="#" class="tui-page-btn tui-next">' +
            `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowNext}"></use></svg>` +
            '</a>';
        }

        return template;
      },
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dots}"></use></svg>` +
        '</a>',
    },
  };

  const paginate = new Pagination(refs.paginationContainer, options);

  paginate.on('afterMove', onPageClick);

  function onPageClick(event) {
    currentPage = event.page;
    onLoaderVisible();
    window.scrollTo(0, 0); // scroll to top when pagination is clicked
    if (paginationSettings.searchType === 'keyWord') {
      fetchKeyWord(searchQueryParse, event.page)
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    } else if (paginationSettings.searchType === 'trendingDay') {
      fetchTrendingMovies(event.page)
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    } else if (paginationSettings.searchType === 'trendingWeek') {
      fetchTrendingMovies(event.page, 'week')
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    } else if (paginationSettings.searchType === 'topRated') {
      fetchTopRatedMovies(event.page)
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    } else if (paginationSettings.searchType === 'upcoming') {
      fetchUpcomingMovies(event.page)
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    } else {
      fetchNowPlayingMovies(event.page)
        .then(onPageClickSuccess)
        .catch(error => console.log(error));
    }
  }

  function onPageClickSuccess(response) {
    const lastPage = response.total_pages;
    const lastPageFixed = lastPage - 3;
    hideBtn(currentPage, lastPage, lastPageFixed);
    renderGallery(response.results);
    renderingPlaceholder();
    onLoaderHidden();
    addDataToLocalStorage(refs.movieKey, response);
  }

  function hideBtn(page, lastPage, lastPageFixed) {
    const firstBtn = document.querySelector('.tui-first');
    const lastBtn = document.querySelector('.tui-last');

    if (page < 4) {
      firstBtn.classList.add('hide-first');
    }

    if (page >= 4 && lastPage >= 7) {
      firstBtn.classList.remove('hide-first');
    }

    if (page > lastPageFixed) {
      lastBtn.classList.add('hide-last');
    }
    if (page <= lastPageFixed) {
      lastBtn.classList.remove('hide-last');
    }

    if (lastPage < 7 && page <= 4) {
      lastBtn.classList.add('hide-last');
      firstBtn.classList.add('hide-first');
    }
  }

  return paginate;
};
