// import getRefs from './get-refs';
import Pagination from 'tui-pagination';
import fetchPopularMovies from './fetchPopularMovies';
import { updateCurrentPage } from '../index';
import fetchKeyWord from './fetchKeyWord';

const container = document.getElementById('pagination2');

export const paginationSettings = {
  startPage: 1,
};

export const pagination = ({ totalItems, page }) => {
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const paginate = new Pagination(container, options);

  paginate.on('afterMove', onPageClick);

  function onPageClick(event) {
    updateCurrentPage(event.page);
    // fetchKeyWord(searchQuery, event.page);
    // fetchPopularMovies(event.page);
  }

  return paginate;
};
