import EmployeeList from './employee-list.tsx';
import CreateEmployeeDialog from './create-employee-dialog.tsx';
import Button from 'react-bootstrap/Button';
import { useEmployees } from '../use-employees.tsx';

export default function Employees() {
  const { deleteAllEmployees } = useEmployees();

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeList />
      <CreateEmployeeDialog />
      <Button variant="danger"
              data-e2e="delete-all-employees-button"
              onClick={() => deleteAllEmployees()}>
        Delete All
      </Button>
    </div>
  );
}
