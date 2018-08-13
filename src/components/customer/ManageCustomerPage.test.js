import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCustomerPage } from './ManageCustomerPage';

describe('Manage Customer Page', () => {
  it('sets error message when trying to save empty firstName', () => {

    const props = {
      vehicles: [],
      actions: { saveCustomer: () => { return Promise.resolve();}},
      customer: {id: '', firstName: '', lastName: '', email: '', phoneNumber: '', vehicleId: ''}
    };

    const wrapper = mount(<ManageCustomerPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.firstName).toBe('First Name is required');
  });
});