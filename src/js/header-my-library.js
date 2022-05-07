import getRefs from "./get-refs";
import libraryButton from './libraryButton';

const refs = getRefs();


const header = document.querySelector('.header');  // хедер
const form = document.querySelector('.header__form'); // форма хедеру
const myLibraryBtnItem = document.querySelector('.library-btn__item'); // кнопки хедеру My library Watched та Queue
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const logo = document.querySelector('.logo__link');
const searchTextError = document.querySelector('.header_error');


refs.homeRef.addEventListener('click', onHeaderHomeBtnClick); // homeRef: document.querySelector('[data-link="home"]')
refs.myLibraryRef.addEventListener('click', onMyLibraryBtnClick); // myLibraryRef: document.querySelector('[data-link="my-library"]')
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
logo.addEventListener('click', onHeaderHomeBtnClick);


function onHeaderHomeBtnClick() {
    myLibraryBtnItem.classList.add('is-hidden');  // приховуються кнопки Watched та Queue
    form.classList.remove('is-hidden'); // з'являється форма
    searchTextError.classList.remove('is-hidden'); // з'являється помилковий текст у разі введення некоректного запиту
    refs.homeRef.classList.add('current'); // додається помаранчеве підкреслення кнопки Home
    refs.myLibraryRef.classList.remove('current'); // знімається помаранчеве підкреслення з кнопки My library
    header.classList.remove('header__my-library');  // видаляється фонове зображення My library
}

function onMyLibraryBtnClick() {
    form.classList.add('is-hidden'); // приховується форма
    searchTextError.classList.add('is-hidden'); // зникає помилковий текст у разі введення некоректного запиту
    myLibraryBtnItem.classList.remove('is-hidden'); // додаються кнопки Watched та Queue
    refs.myLibraryRef.classList.add('current'); // додається помаранчеве підкреслення кнопки My library
    refs.homeRef.classList.remove('current');  // знімається помаранчеве підкреслення з кнопки Home
    header.classList.add('header__my-library'); // видаляється фонове зображення Home
}

function onWatchedBtnClick() {
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  libraryButton('watched');
}

function onQueueBtnClick() {
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
  libraryButton('queue');
}



