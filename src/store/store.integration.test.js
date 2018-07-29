import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('Should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const customer = {
      title: 'Clean Code'
    };

    // act
    const action = courseActions.createCourseSuccess(customer);
    store.dispatch(action);

    // assert
    const actual = store.getState().customers[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual).toEqual(expected);
  });
});