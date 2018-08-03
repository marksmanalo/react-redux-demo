import * as types from './actionTypes';
import customerApi from '../api/mockCustomerApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCustomersSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function createCustomerSuccess(customer) {
  return { type: types.CREATE_CUSTOMER_SUCCESS, customer};
}

export function updateCustomerSuccess(customer) {
  return { type: types.UPDATE_CUSTOMER_SUCCESS, customer};
}

export function loadCustomers() {
  // redux thunk allows us to return an function instead of an ojbect
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return customerApi.getAllCustomers().then(customers => {
      dispatch(loadCustomersSuccess(customers));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCustomer(customer) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return customerApi.saveCustomer(customer).then(savedCustomer => {
      savedCustomer.id ? dispatch(updateCustomerSuccess(savedCustomer)) :
      dispatch(createCustomerSuccess(savedCustomer));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
