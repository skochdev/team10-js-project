import getRefs from "./get-refs";
import renderGenres from "./renderGenres";
import renderGallery from "./renderGallery";

const refs = getRefs();

export default function librarySidebar() {
  renderGenres();
  const sidebar = refs.sidebar;
  sidebar.classList.remove('visually-hidden');
  const currentSorting = findActiveSorting();
  const currentFiltering = findActiveFiltering();
  changeActive(currentSorting, sidebar.querySelector('[data-sortby="AdditionDate"]'));
  changeActive(currentFiltering, sidebar.querySelector('[data-genreid="all"]'));

  sidebar.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'A') return;
    const storage = document.querySelector('.library-btn.active').textContent.toLowerCase();
    if (!localStorage.getItem(storage)) return;
    const array = JSON.parse(localStorage.getItem(storage));
    if (array.length < 1) return;
    const activeSort = findActiveSorting();
    const activeFilter = findActiveFiltering();

    if (event.target.dataset.sortby === 'Name') {
      array.sort((firstFilm, secondFilm) => firstFilm.title.localeCompare(secondFilm.title));
      renderSortedMovies(array);
      changeActive(activeSort, sidebar.querySelector('[data-sortby="Name"]'));
      changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      return;
    }
    if (event.target.dataset.sortby === 'Vote') {
      array.sort((firstFilm, secondFilm) => secondFilm.vote_average - firstFilm.vote_average);
      renderSortedMovies(array);
      changeActive(activeSort, sidebar.querySelector('[data-sortby="Vote"]'));
      changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      return;
    }
    if (event.target.dataset.sortby === 'Popularity') {
      array.sort((firstFilm, secondFilm) => secondFilm.popularity - firstFilm.popularity);
      renderSortedMovies(array);
      changeActive(activeSort, sidebar.querySelector('[data-sortby="Popularity"]'));
      changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      return;
    }
    if (event.target.dataset.sortby === 'Year') {
      array.sort((firstFilm, secondFilm) => new Date(secondFilm.release_date).getTime() - new Date(firstFilm.release_date).getTime());
      renderSortedMovies(array);
      changeActive(activeSort, sidebar.querySelector('[data-sortby="Year"]'));
      changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      return;
    }
    if (event.target.dataset.sortby === 'AdditionDate') {
      renderSortedMovies(array);
      changeActive(activeSort, sidebar.querySelector('[data-sortby="AdditionDate"]'));
      changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      return;
    }
    if (event.target.dataset.genreid === 'all') {
      if (activeSort.dataset.sortby === 'AdditionDate') {
        changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      } else if (activeSort.dataset.sortby === 'Name') {
        array.sort((firstFilm, secondFilm) => firstFilm.title.localeCompare(secondFilm.title));
        changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      } else if (activeSort.dataset.sortby === 'Vote') {
        array.sort((firstFilm, secondFilm) => secondFilm.vote_average - firstFilm.vote_average);
        changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      } else if (activeSort.dataset.sortby === 'Popularity') {
        array.sort((firstFilm, secondFilm) => secondFilm.popularity - firstFilm.popularity);
        changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      } else if (activeSort.dataset.sortby === 'Year') {
        array.sort((firstFilm, secondFilm) => new Date(secondFilm.release_date).getTime() - new Date(firstFilm.release_date).getTime());
        changeActive(activeFilter, sidebar.querySelector('[data-genreid="all"]'));
      }
      renderSortedMovies(array);
    } else if (event.target.dataset.genreid) {
      if (activeSort.dataset.sortby === 'Name') {
        array.sort((firstFilm, secondFilm) => firstFilm.title.localeCompare(secondFilm.title));
      } else if (activeSort.dataset.sortby === 'Vote') {
        array.sort((firstFilm, secondFilm) => secondFilm.vote_average - firstFilm.vote_average);
      } else if (activeSort.dataset.sortby === 'Popularity') {
        array.sort((firstFilm, secondFilm) => secondFilm.popularity - firstFilm.popularity);
      } else if (activeSort.dataset.sortby === 'Year') {
        array.sort((firstFilm, secondFilm) => new Date(secondFilm.release_date).getTime() - new Date(firstFilm.release_date).getTime());
      }
      const newArr = array.filter(item => item.genre_ids.includes(Number(event.target.dataset.genreid)));
      const genreId = Number(event.target.dataset.genreid);
      const genreSelector = '[data-genreid="' + genreId + '"]';
      renderSortedMovies(newArr);
      changeActive(activeFilter, sidebar.querySelector(genreSelector));
      return;
    }
  });
}

function renderSortedMovies(array) {
  renderGallery(array);
  const votes = refs.gallery.querySelectorAll('.movie__vote');
  votes.forEach(item => item.classList.remove('movie__vote--position'));
}

function findActiveSorting() {
  return refs.sidebar.querySelector('.sidebar__link.sidebar__link--active');
}

function findActiveFiltering() {
  return refs.sidebar.querySelector('.sidebar__list-genres .sidebar__link--active');
}

function changeActive(oldActive, newActive) {
  oldActive.classList.remove('sidebar__link--active');
  newActive.classList.add('sidebar__link--active');
}