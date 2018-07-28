import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CustomersPage from './components/customer/CustomersPage';
import ManageCustomerPage from './components/customer/ManageCustomerPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="customers" component={CustomersPage} />
    <Route path="customer" component={ManageCustomerPage} />
    <Route path="customer/:id" component={ManageCustomerPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);