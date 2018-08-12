import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';
import { Modal } from 'react-bootstrap';

class CustomersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
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
        <CustomerList customers={customers} />

        <Modal show={true}>
          <Modal.Header>
              <Modal.Title>test</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);