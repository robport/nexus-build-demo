import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { EmployeeService, EmployeeDto } from './open-api';

interface EmployeeContextType {
  employees: EmployeeDto[];
  fetchEmployees: () => void;
  deleteEmployee: (id: number) => void;
  deleteAllEmployees: () => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export interface Props {
  children: ReactNode;
}

export const EmployeeProvider = ({ children }: Props) => {
  const [employees, setEmployees] = useState<EmployeeDto[]>([]);

  const deleteAllEmployees = useCallback(async () => {
    EmployeeService.deleteAll().then(() => {
      fetchEmployees();
    });
  }, []);

  const fetchEmployees = useCallback(async () => {
    EmployeeService.findAll().then((employees) => {
      setEmployees(employees);
    });
  }, []);

  const deleteEmployee = useCallback(async (id: number) => {
    EmployeeService.delete(id).then(() => {
      fetchEmployees();
    });
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, fetchEmployees, deleteEmployee, deleteAllEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = (): EmployeeContextType => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
