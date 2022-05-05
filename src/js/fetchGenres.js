import axios from "axios";

export async function fetchGenres() {
  const { data } = await axios('https://api.themoviedb.org/3/genre/movie/list?api_key=fdf0e898687a376156944fbb1ab25196&language=en-US');
  return data.genres;
}
