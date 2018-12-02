
import { fromJS } from 'immutable';
import movieContainerReducer from '../reducer';

describe('movieContainerReducer', () => {
  it('returns the initial state', () => {
    expect(movieContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
