import request from "utils/request";
import { takeLatest, call, put, all, take } from "redux-saga/effects";

import {
  GET_PERSON_DETAILS,
  GET_SORTED_MOVIE_LIST,
  GET_MOVIE_CREDITS
} from "./constants";

import {
  personDetailsFetched,
  sortedMovieListFetched,
  loadingFailed
} from "./actions";

function* getPersonDetails(action) {
  const requestURL = `https://api.themoviedb.org/3/search/person?api_key=8d02025ec9fec7dd5898e41e05344417&query=${
    action.param.search
  }`;
  try {
    const data = yield call(request, requestURL);
    yield put(personDetailsFetched(data.results));
  } catch (err) {
    yield put(loadingFailed(err));
  }
}

function* getSortedMovieList(action) {
  const requestURL = `https://api.themoviedb.org/3/discover/movie?api_key=8d02025ec9fec7dd5898e41e05344417&primary_release_year=${
    action.releaseYear
  }&sort_by=${action.sortParam}&with_genres=${action.genre || ""}`;
  try {
    const data = yield call(request, requestURL);
    const sortedMovies = (data.results || []).sort((a, b) => {
      return (
        b.vote_average - a.vote_average ||
        a.original_title.length - b.original_title.length
      );
    });
    yield put(sortedMovieListFetched(sortedMovies));
  } catch (err) {
    yield put(loadingFailed(err));
  }
}

function* getMovieCredits(action) {
  const requestURL = `https://api.themoviedb.org/3/person/${
    action.personId
  }/movie_credits?api_key=8d02025ec9fec7dd5898e41e05344417`;
  try {
    const data = yield call(request, requestURL);
    const result =
      data.cast && data.cast.length > 0 ? data.cast : data.crew || [];
    const sortedMovies = result.sort((a, b) => {
      return (
        b.vote_average - a.vote_average ||
        a.original_title.length - b.original_title.length
      );
    });
    yield put(sortedMovieListFetched(sortedMovies));
  } catch (err) {
    yield put(loadingFailed(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PERSON_DETAILS, getPersonDetails),
    takeLatest(GET_SORTED_MOVIE_LIST, getSortedMovieList),
    takeLatest(GET_MOVIE_CREDITS, getMovieCredits)
  ]);
}

function fetchApi(url) {
  return fetch(url).then(response => {
    return response.json;
  });
}
