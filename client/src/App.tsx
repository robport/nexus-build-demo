import './App.css';
import { EmployeeProvider } from './use-employees.tsx';
import Employees from './components/employees.tsx';

function App() {

  return (<>
    <EmployeeProvider>
      <Employees />
    </EmployeeProvider>
  </>);
}

export default App;
