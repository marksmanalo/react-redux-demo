import React from 'react';

const VehicleTable = ( {vehicle} ) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Price</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Miles</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>${vehicle.price}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.year}</td>
          <td>{vehicle.color}</td>
          <td>{vehicle.miles}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VehicleTable;