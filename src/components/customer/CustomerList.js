import React from 'react';
import CustomerListRow from './CustomerListRow';

const CustomerList = ({customers}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Vehicle Of Interest</th>
      </tr>
      </thead>
      <tbody>
      {customers.map( customer =>
        <CustomerListRow key={customer.id} customer={customer} />
      )}
      </tbody>
    </table>
  );
};

export default CustomerList;