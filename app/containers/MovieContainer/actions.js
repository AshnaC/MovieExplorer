/*
 *
 * MovieContainer actions
 *
 */

import {
  GET_PERSON_DETAILS,
  PERSON_DETAILS_FETCHED,
  GET_SORTED_MOVIE_LIST,
  SORTED_MOVIES_FETCHED,
  GET_MOVIE_CREDITS,
  LOADING_FAILED
} from "./constants";

export function getPersonDetails(param) {
  return {
    type: GET_PERSON_DETAILS,
    param
  };
}

export function personDetailsFetched(personDetails) {
  return {
    type: PERSON_DETAILS_FETCHED,
    personDetails
  };
}

export function getSortedMovieList(params) {
  return {
    type: GET_SORTED_MOVIE_LIST,
    releaseYear: params.releaseYear,
    sortParam: params.sortParam,
    genre: params.genre
  };
}

export function sortedMovieListFetched(sortedMovieList) {
  return {
    type: SORTED_MOVIES_FETCHED,
    sortedMovieList
  };
}

export function getMovieCredits(personId) {
  return {
    type: GET_MOVIE_CREDITS,
    personId
  };
}

export function loadingFailed() {
  return {
    type: LOADING_FAILED
  };
}
