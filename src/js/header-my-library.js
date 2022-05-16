import getRefs from "./get-refs";
import libraryButton from './libraryButton';
import librarySidebar from "./librarySidebar";
import renderMainPage from './renderMainPage';

const refs = getRefs();

refs.homeRef.addEventListener('click', onHeaderHomeBtnClick); // homeRef: document.querySelector('[data-link="home"]')
refs.myLibraryRef.addEventListener('click', onMyLibraryBtnClick); // myLibraryRef: document.querySelector('[data-link="my-library"]')
refs.libWatchedBtn.addEventListener('click', onWatchedBtnClick);
refs.libQueueBtn.addEventListener('click', onQueueBtnClick);
refs.logoRef.addEventListener('click', onHeaderHomeBtnClick);


export default function onHeaderHomeBtnClick() {
    refs.libButtons.classList.add('is-hidden');  // приховуються кнопки Watched та Queue
    refs.headerFormRef.classList.remove('is-hidden'); // з'являється форма
    refs.errorWindowRef.classList.remove('is-hidden'); // з'являється помилковий текст у разі введення некоректного запиту
    refs.homeRef.classList.add('current'); // додається помаранчеве підкреслення кнопки Home
    refs.myLibraryRef.classList.remove('current'); // знімається помаранчеве підкреслення з кнопки My library
    refs.headerRef.classList.remove('header__my-library');  // видаляється фонове зображення My library
    refs.mainRef.querySelector('.sidebar').classList.add('visually-hidden');
    refs.mainRef.querySelector('.filter__buttons_wrapper').classList.remove('visually-hidden');
    refs.mainRef.querySelector('.filter__btn--active').classList.remove('filter__btn--active');
    refs.filterBtnDaily.classList.add('filter__btn--active');
    renderMainPage('day');
}

function onMyLibraryBtnClick() {
    refs.headerFormRef.classList.add('is-hidden'); // приховується форма
    refs.errorWindowRef.classList.add('is-hidden'); // зникає помилковий текст у разі введення некоректного запиту
    refs.libButtons.classList.remove('is-hidden'); // додаються кнопки Watched та Queue
    refs.myLibraryRef.classList.add('current'); // додається помаранчеве підкреслення кнопки My library
    refs.homeRef.classList.remove('current');  // знімається помаранчеве підкреслення з кнопки Home
    refs.headerRef.classList.add('header__my-library'); // видаляється фонове зображення Home
    refs.libWatchedBtn.classList.add('active');
    refs.paginationContainer.classList.add('visually-hidden');
    libraryButton('watched');
    librarySidebar();
    refs.mainRef.querySelector('.filter__buttons_wrapper').classList.add('visually-hidden');
  if (refs.libQueueBtn.classList.contains('active')) {
    refs.libWatchedBtn.classList.add('active');
    refs.libQueueBtn.classList.remove('active');
  }
}

function onWatchedBtnClick() {
  refs.libQueueBtn.classList.remove('active');
  refs.libWatchedBtn.classList.add('active');
  libraryButton('watched');
  librarySidebar();
}

function onQueueBtnClick() {
  refs.libWatchedBtn.classList.remove('active');
  refs.libQueueBtn.classList.add('active');
  libraryButton('queue');
  librarySidebar();
}
