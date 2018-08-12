import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';
import VehicleModal from '../vehicle/VehicleModal';
import { getSelectedVehicle } from '../../selectors/selectors';

class CustomersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showVehicleModal: false,
      selectedVehicle: {}
    };
  }

  handleClose() {
    this.setState({showVehicleModal: false });
  }

  handleShow(selectedVehicleId) {
    this.setState({ showVehicleModal: true, selectedVehicle: getSelectedVehicle(this.props.vehicles, selectedVehicleId) });
  }

  redirectToAddCustomerPage() {
    browserHistory.push('/customer');
  }

  render () {
    const { customers } = this.props;

    return (
      <div>
        <h1>Customers</h1>
        <input
          type="submit"
          value="Add Customer"
          className="btn btn-primary"
          onClick={this.redirectToAddCustomerPage}
        />        
        <CustomerList customers={customers} handleShow={this.handleShow} />
        <VehicleModal show={this.state.showVehicleModal} handleClose={this.handleClose} vehicle={this.state.selectedVehicle} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers,
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);