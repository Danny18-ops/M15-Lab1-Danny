import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.title}</td>
    </tr>
  );
}

function EmployeeTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {props.employees && props.employees.map((emp, i) => (
          <EmployeeRow key={i} name={emp.name} title={emp.title} />
        ))}
      </tbody>
    </table>
  );
}

class EmployeeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Employee List</h1>
        <EmployeeFilter />
        <EmployeeTable employees={[]} />
        <EmployeeAdd />
      </div>
    );
  }
}

export default EmployeeList;
