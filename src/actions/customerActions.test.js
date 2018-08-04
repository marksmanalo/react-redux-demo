import expect from 'expect';
import * as customerActions from './customerActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

<<<<<<< HEAD:src/actions/customerActions.test.js
  it('should create BEGIN_AJAX_CALL and LOAD_CUSTOMERS_SUCCESS when loading customers', (done) => {
    // Here's an example call to nock to mock a real api
    // nock('http://example.com/')
    //  .get('/customers')
    //  .reply(200, {body: {customers: [{ id: 1, firstName: 'Cory', lastName: 'House'}]}});
=======
  it('should create BEGIN_AJAX_CALL and LOAD_CUSTOMER_SUCESS when loading customers', (done) => {
    // Here's an example call to nock to mock a real api
    // nock('http://example.com/')
    //  .get('/customers')
    //  .reply(200, {body: {customer: [{ id: 1, firstName: 'Cory', lastName: 'House'}]}});
>>>>>>> 733e14986726a6eb9e69ee2fde6a2357bd4dc35f:src/actions/customerActions.test.js

    // but we are using a mock api so we dont need to do the above
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
<<<<<<< HEAD:src/actions/customerActions.test.js
      {type: types.LOAD_CUSTOMERS_SUCCESS, body: {customers: [{id: 'al-romero', firstName: 'al'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(customerActions.loadCourses()).then(() => {
=======
      {type: types.LOAD_CUSTOMERS_SUCCESS, body: {customers: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({customers: []}, expectedActions);
    store.dispatch(customerActions.loadCustomers()).then(() => {
>>>>>>> 733e14986726a6eb9e69ee2fde6a2357bd4dc35f:src/actions/customerActions.test.js
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_CUSTOMERS_SUCCESS);
      done();
    });
  });
});

