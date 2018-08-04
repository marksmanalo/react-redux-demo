import expect from 'expect';
import customerReducer from './customerReducer';
import * as actions from '../actions/customerActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {firstName: 'A'},
      {firstName: 'B'}
    ];

    const newCustomer = {firsName: 'C'};

    const action = actions.createCustomerSuccess(newCustomer);

    // act
    const newState = customerReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].firstName).toEqual('A');
    expect(newState[1].firstName).toEqual('B');
    expect(newState[2].firstName).toEqual('C');
  });

  it('should update customer when passed UPDATE_CUSTOMER_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A'},
      {id: 'B', firstName: 'B'},
      {id: 'C', firstName: 'C'}
    ];

    const customer = {id: 'B', firstName: 'New Name'};
    const action = actions.updateCustomerSuccess(customer);

    // act
    const newState = customerReducer(initialState, action);
    const updatedCustomer = newState.find(a => a.id == customer.id);
    const untouchedCustomer = newState.find(a => a.id == 'A');

    // assert
    expect(updatedCustomer.firstName).toEqual('New Title');
    expect(untouchedCustomer.firstName).toEqual('A');
    expect(newState.length).toEqual(3);
  });  
});