import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { employee, deleteEmployee } = this.props;
    return (
      <tr>
        <td>{employee.firstName} {employee.lastName}</td>
        <td>{employee.extension}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.startDate}</td>
        <td>{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>X</Button>
          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>Cancel</Button>
              <Button variant="primary" onClick={() => { deleteEmployee(employee.id); this.toggleModal(); }}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Start Date</th>
          <th>Currently Employed?</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((emp) => (
          <EmployeeRow key={emp.id} employee={emp} deleteEmployee={props.deleteEmployee} />
        ))}
      </tbody>
    </Table>
  );
}

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstName: 'Alice', lastName: 'Smith', extension: '1001', email: 'alice@example.com', title: 'Engineer', startDate: '2020-01-15', currentlyEmployed: true },
        { id: 2, firstName: 'Bob', lastName: 'Jones', extension: '1002', email: 'bob@example.com', title: 'Designer', startDate: '2019-03-22', currentlyEmployed: true },
        { id: 3, firstName: 'Carol', lastName: 'White', extension: '1003', email: 'carol@example.com', title: 'Manager', startDate: '2018-07-10', currentlyEmployed: true },
        { id: 4, firstName: 'David', lastName: 'Brown', extension: '1004', email: 'david@example.com', title: 'Analyst', startDate: '2021-05-01', currentlyEmployed: false },
        { id: 5, firstName: 'Eva', lastName: 'Davis', extension: '1005', email: 'eva@example.com', title: 'Engineer', startDate: '2022-02-14', currentlyEmployed: true },
        { id: 6, firstName: 'Frank', lastName: 'Miller', extension: '1006', email: 'frank@example.com', title: 'Sales', startDate: '2017-11-30', currentlyEmployed: true },
        { id: 7, firstName: 'Grace', lastName: 'Wilson', extension: '1007', email: 'grace@example.com', title: 'HR', startDate: '2020-09-05', currentlyEmployed: true },
        { id: 8, firstName: 'Hank', lastName: 'Moore', extension: '1008', email: 'hank@example.com', title: 'DevOps', startDate: '2019-06-18', currentlyEmployed: false },
        { id: 9, firstName: 'Iris', lastName: 'Taylor', extension: '1009', email: 'iris@example.com', title: 'QA', startDate: '2023-01-09', currentlyEmployed: true },
        { id: 10, firstName: 'Jack', lastName: 'Anderson', extension: '1010', email: 'jack@example.com', title: 'Engineer', startDate: '2021-08-23', currentlyEmployed: true },
      ],
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    this.setState((prev) => ({
      employees: prev.employees.filter((emp) => emp.id !== id),
    }));
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Employee List</h1>
        <EmployeeFilter />
        <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        <EmployeeAdd />
      </div>
    );
  }
}

export default EmployeeList;
