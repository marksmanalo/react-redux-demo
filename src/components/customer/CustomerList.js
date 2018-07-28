import React from 'react';
import CustomerListRow from './CustomerListRow';

const CustomerList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map( course =>
        <CustomerListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

export default CustomerList;