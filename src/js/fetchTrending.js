import axios from "axios";

export async function fetchTrending() {
  const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=fdf0e898687a376156944fbb1ab25196`);
  return data;
}