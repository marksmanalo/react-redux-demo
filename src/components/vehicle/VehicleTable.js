import React from 'react';

const VehicleTable = ( {vehicle} ) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Model</th>
        <th>Color</th>
        <th>Miles</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>{vehicle.model}</td>
          <td>{vehicle.color}</td>
          <td>{vehicle.miles}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VehicleTable;