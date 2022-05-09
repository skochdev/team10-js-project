import '../sass/main.scss';
import getRefs from './get-refs';
import Pagination from 'tui-pagination';
import fetchPopularMovies from './fetchPopularMovies';
import fetchKeyWord from './fetchKeyWord';
import renderTrending from './renderTrending';
import addDataToLocalStorage from './addDataToLocalStorage';
import 'tui-pagination/dist/tui-pagination.css';

const refs = getRefs();

export const paginationSettings = {
  startPage: 1,
  searchType: '',
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

  const paginate = new Pagination(refs.paginationContainer, options);

  paginate.on('afterMove', onPageClick);

  function onPageClick(event) {
    if (paginationSettings.searchType === 'keyWord') {
      const searchQuery = localStorage.getItem('searchQuery');
      const searchQueryParse = JSON.parse(searchQuery);
      fetchKeyWord(searchQueryParse, event.page)
        .then(response => {
          const genres = JSON.parse(localStorage.getItem('genre_ids'));

          renderTrending(refs.gallery, response.data.results, genres);

          addDataToLocalStorage(refs.movieKey, response);
        })
        .catch(error => console.log(error));
    } else {
      fetchPopularMovies(event.page)
        .then(response => {
          const genres = JSON.parse(localStorage.getItem('genre_ids'));

          renderTrending(refs.gallery, response.results, genres);

          addDataToLocalStorage(refs.movieKey, response);
        })
        .catch(error => console.log(error));
    }
  }

  return paginate;
};
