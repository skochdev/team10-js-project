import fetchGenres from './fetchGenres';

export default function saveGenresToLocalStorage() {
  return fetchGenres().then(data => {
    localStorage.setItem('genre_ids', JSON.stringify(data));
  });
}
