import Table from 'react-bootstrap/Table';
import { useEmployees } from '../use-employees.tsx';
import { useEffect } from 'react';
import { CloseButton } from 'react-bootstrap';

const EmployeeList = () => {

  const { employees, fetchEmployees, deleteEmployee } = useEmployees();

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {employees.map(employee => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td><CloseButton onClick={() => deleteEmployee(employee.id)}/></td>
        </tr>
      ))}
      </tbody>
    </Table>
  );

};

export default EmployeeList;
