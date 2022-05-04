import './sass/main.scss';
import getRefs from './js/get-refs';
import renderSpinner from './js/spinner';

const refs = getRefs();

refs.searchBtnRef.addEventListener('click', onSearchClick);

function onSearchClick() {
  renderSpinner(refs.mainRef);
}
