import { fetchGenres } from './fetchGenres';

export function saveGenresToLocalStorage() {
    return fetchGenres().then(data => {
    localStorage.setItem("genre_ids", JSON.stringify(data));
})
}






