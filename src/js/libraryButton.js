import getRefs from "./get-refs";
import renderTrending from "./renderTrending";

// функції передається рядок 'queue' або 'watched'
export default function libraryButton(storage) {
  const refs = getRefs();
  if (localStorage.getItem(storage)) {
    renderTrending(refs.gallery, JSON.parse(localStorage.getItem(storage)));
    return;
  } else {
    refs.gallery.innerHTML = '';
    console.info(`Your ${storage} library is empty!`);
  }
}