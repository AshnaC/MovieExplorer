import { createSelector } from 'reselect';

/**
 * Direct selector to the movieContainer state domain
 */
const selectMovieContainerDomain = (state) => state.get('movieContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MovieContainer
 */

const makeSelectMovieContainer = () => createSelector(
  selectMovieContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectMovieContainer;
export {
  selectMovieContainerDomain,
};
