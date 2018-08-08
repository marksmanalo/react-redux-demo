import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';

// Need react 16.3 or greater for material ui
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

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

                {/* <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
        >
          <div>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal> */}
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