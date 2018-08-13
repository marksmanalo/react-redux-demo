import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerForm from './CustomerForm';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import { vehiclesFormattedForDropdown } from '../../selectors/selectors';

export class ManageCustomerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: Object.assign({}, this.props.customer),
      errors: {},
      saving: false
    };
    
    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customer.id != nextProps.customer.id) {
      this.setState({customer: Object.assign({}, nextProps.customer)});
    }
  }

  updateCustomerState(event) {
    const field = event.target.name;
    let customer = Object.assign({}, this.state.customer);
    customer[field] = event.target.value;
    return this.setState({customer: customer});
  }

  redirectToAddCustomersPage() {
    this.setState({saving: false});
    toastr.success('Customer saved');
    browserHistory.push('/customers');
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  customerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.customer.firstName.length == 0) {
      errors.firstName = 'First Name is required';
      formIsValid = false;
    }

    if (this.state.customer.lastName.length == 0) {
      errors.lastName = 'Last Name is required';
      formIsValid = false;
    }

    if (!this.validateEmail(this.state.customer.email)) {
      errors.email = 'Email format is incorrect';
      formIsValid = false;
    }

    // Commenting this our so we can see server side validation
    // if (this.state.customer.phoneNumber.length < 10 ||  this.state.customer.phoneNumber.length > 10){
    //   errors.phoneNumber = 'Phone Number must be 10 characters';
    //   formIsValid = false;
    // }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCustomer(event) {
    event.preventDefault();

    if (!this.customerFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCustomer(this.state.customer).then(() => this.redirectToAddCustomersPage())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <CustomerForm
        allVehicles={this.props.vehicles}
        onChange={this.updateCustomerState}
        onSave={this.saveCustomer}
        customer={this.state.customer}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  } 
}

function getCustomerById(customers, id) {
  const customer = customers.filter(customer => customer.id == id);
  if (customer.length) return customer[0];
  return null;
}

function mapStateToProps(state, ownProps) {

  let customer = {id: '', firstName: '', lastName: '', email: '', phoneNumber: '', vehicleOfInterest: ''};
  const customerId = ownProps.params.id;  // from the path '/customer/:id'

  if (customerId && state.customers.length > 0) {
    customer = getCustomerById(state.customers, customerId);
  }

  return {
    customer: customer,
    vehicles: vehiclesFormattedForDropdown(state.vehicles)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);