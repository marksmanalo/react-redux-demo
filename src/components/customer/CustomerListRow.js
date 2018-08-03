import React from 'react';
import { Link } from 'react-router';

const CustomerListRow = ( {customer} ) => {
  return (
    <tr>
      <td><Link to={'/customer/' + customer.id}>{customer.firstName} {customer.lastName}</Link></td>
      <td>{customer.email}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.vehicleId}</td>
    </tr>
  );
};

export default CustomerListRow;