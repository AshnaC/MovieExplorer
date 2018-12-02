/*
 *
 * MovieContainer constants
 *
 */

export const GET_PERSON_DETAILS = "app/MovieContainer/GET_PERSON_DETAILS";
export const PERSON_DETAILS_FETCHED =
  "app/MovieContainer/PERSON_DETAILS_FETCHED";
export const GET_SORTED_MOVIE_LIST = "app/MovieContainer/GET_SORTED_MOVIE_LIST";
export const SORTED_MOVIES_FETCHED = "app/MovieContainer/SORTED_MOVIES_FETCHED";
export const GET_MOVIE_CREDITS = "app/MovieContainer/GET_MOVIE_CREDITS";
export const LOADING_FAILED = "app/MovieContainer/LOADING_FAILED";

export const yearList = getYearList();
export const sortPrams = [
  { name: "Most Popular", value: "popularity.desc" },
  { name: "Most Rated", value: "vote_average.desc" },
  { name: "Highest Grossing", value: "revenue.desc" },
  { name: "Title (Z-A)", value: "original_title.asc" },
  { name: "Title (A-Z)", value: "original_title.desc" }
];
export const genres = [
  {
    value: 28,
    name: "Action"
  },
  {
    value: 16,
    name: "Animation"
  },
  {
    value: 35,
    name: "Comedy"
  },
  {
    value: 80,
    name: "Crime"
  },
  {
    value: 18,
    name: "Drama"
  },
  {
    value: 14,
    name: "Fantasy"
  },
  {
    value: 27,
    name: "Horror"
  },
  {
    value: 878,
    name: "Science Fiction"
  }
];
export const menu = { MOVIES: 1, EXPLORER: 2 };

function getYearList() {
  const currentYear = new Date().getFullYear();
  let years = [{ name: "", value: null }, { value: currentYear }];
  for (let i = 1; i < 5; i++) {
    years = [...years, { value: currentYear - i }];
  }
  return years;
}
