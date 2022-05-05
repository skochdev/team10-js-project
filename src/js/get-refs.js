/*  Создал Богдан тим-лид

  Тут храним все рефы. Импортируете куда вам нужно, добавляйте рефы если нужно еще,
  делаете себе в файле переменную 

      const refs = getRefs();

  и далее используете по стандарту refs.searchBtnRef.addEveventListener()   и тд

*/

export default function getRefs() {
  return {
    searchBtnRef: document.querySelector('[data-action="search-button"]'),
    homeRef: document.querySelector('[data-link="home"]'),
    myLibraryRef: document.querySelector('[data-link="my-library"]'),
    // рефа тегу <main> з index.html
    mainRef: document.querySelector('main'),
    galleryRef: document.querySelector('.film-gallery'),
    parsedGenresRef: JSON.parse(localStorage.getItem("genre_ids")),
    
    // footer related refs // рефи з футера
    footerModalBackdrop: document.querySelector('[data-footerModalBackdrop]'),
    studentsModal: document.querySelector('[data-studentsModal]'),
    footerCloseBtnRef: document.querySelector('[data-action="footerCloseBtn"]'),
  };
}
