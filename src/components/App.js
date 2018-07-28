// This component handles the App template used on every page
import React from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownPRops) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);