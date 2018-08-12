import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';
import VehcleModal from '../vehicle/VehicleModal';

class CustomersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showVehicleModal: true
    };
  }

  handleClose() {
    this.setState({showVehicleModal: false });
  }

  handleShow() {
    this.setState({ showVehicleModal: true });
  }

  redirectToAddCustomerPage() {
    browserHistory.push('/customer');
  }

  render () {
    const { customers } = this.props;
    const { vehicles } = this.props;

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
        {vehicles.map( vehicle => {
          return (<div>{vehicle.id}</div>);
        })}

        <VehcleModal show={this.state.showVehicleModal} handleClose={this.handleClose} />
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