import React from 'react';
import { Link } from 'react-router';

const CustomerListRow = ( {customer} ) => {
  return (
    <tr>
      <td><Link to={'/customer/' + customer.id}>{customer.title}</Link></td>
      <td>{customer.authorId}</td>
      <td>{customer.category}</td>
      <td>{customer.length}</td>
    </tr>
  );
};

export default CustomerListRow;