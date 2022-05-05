export function getGenres(genre_ids, genres) {
  return genre_ids.map(id => genres.find(genre => genre.id === id)).map(element => element.name).join(', ');
}