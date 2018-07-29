import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';

class CustomersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
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
          onClick={this.redirectToAddCoursePage}
        />        
        <CustomerList customers={customers} />
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
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);