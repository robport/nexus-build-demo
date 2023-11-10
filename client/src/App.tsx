import './App.css';
import EmployeeList from './components/employee-list.tsx';
import CreateEmployeeDialog from './components/create-employee-dialog.tsx';
import { EmployeeProvider } from './use-employees.tsx';

function App() {
  return (<>
    <EmployeeProvider>
      <EmployeeList />
      <CreateEmployeeDialog />
    </EmployeeProvider>
  </>);
}

export default App;
