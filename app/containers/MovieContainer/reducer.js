/*
 *
 * MovieContainer reducer
 *
 */

import { fromJS } from "immutable";
import {
  PERSON_DETAILS_FETCHED,
  SORTED_MOVIES_FETCHED,
  GET_PERSON_DETAILS,
  GET_SORTED_MOVIE_LIST,
  GET_MOVIE_CREDITS,
  LOADING_FAILED
} from "./constants";

const initialState = fromJS({});

function movieContainerReducer(state = initialState, action) {
  switch (action.type) {
    case PERSON_DETAILS_FETCHED:
      return state
        .set("personSearchResults", action.personDetails)
        .set("fetchingSearchList", false);
    case GET_PERSON_DETAILS:
      return state.set("fetchingSearchList", true);
    case GET_SORTED_MOVIE_LIST:
    case GET_MOVIE_CREDITS:
      return state.set("fetchingData", true);
    case SORTED_MOVIES_FETCHED:
      return state
        .set("sortedMovieList", action.sortedMovieList)
        .set("fetchingData", false);
    case LOADING_FAILED:
      return state
        .set("error", true)
        .set("fetchingData", false)
        .set("fetchingSearchList", false);
    default:
      return state;
  }
}

export default movieContainerReducer;
