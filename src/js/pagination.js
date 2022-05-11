import 'tui-pagination/dist/tui-pagination.css';
import '../sass/main.scss';
import getRefs from './get-refs';
import Pagination from 'tui-pagination';
import fetchPopularMovies from './fetchPopularMovies';
import fetchKeyWord from './fetchKeyWord';
import renderTrending from './renderTrending';
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
            '<a href="#" class="tui-page-btn tui-first">' +
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
    onLoaderVisible();
    if (paginationSettings.searchType === 'keyWord') {
      const searchQuery = localStorage.getItem('searchQuery');
      const searchQueryParse = JSON.parse(searchQuery);
      fetchKeyWord(searchQueryParse, event.page)
        .then(response => {
          const genres = JSON.parse(localStorage.getItem('genre_ids'));

          renderTrending(refs.gallery, response.data.results, genres);
          renderingPlaceholder();
          onLoaderHidden();

          addDataToLocalStorage(refs.movieKey, response);
        })
        .catch(error => console.log(error));
    } else {
      fetchPopularMovies(event.page)
        .then(response => {
          const genres = JSON.parse(localStorage.getItem('genre_ids'));

          renderTrending(refs.gallery, response.results, genres);
          renderingPlaceholder();
          onLoaderHidden();

          addDataToLocalStorage(refs.movieKey, response);
        })
        .catch(error => console.log(error));
    }
  }

  return paginate;
};
