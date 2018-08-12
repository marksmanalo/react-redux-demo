import React from 'react';
import { Link } from 'react-router';

const CustomerListRow = ( {customer, handleShow} ) => {

  const clickHandler = () => {
    handleShow(customer.vehicleId);
  };

  return (
    <tr>
      <td><Link to={'/customer/' + customer.id}>{customer.firstName} {customer.lastName}</Link></td>
      <td>{customer.email}</td>
      <td>{customer.phoneNumber}</td>
      <td>
        {customer.vehicleId ? 
          <div className="btn btn-primary" onClick={clickHandler} >
            {customer.vehicleId}
          </div> : null
        }
      </td>
    </tr>
  );
};

export default CustomerListRow;