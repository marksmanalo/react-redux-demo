import React from 'react';
import CustomerListRow from './CustomerListRow';

const CustomerList = ({customers, handleShow}) => {
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
        <CustomerListRow key={customer.id} customer={customer} handleShow={handleShow} />
      )}
      </tbody>
    </table>
  );
};

export default CustomerList;