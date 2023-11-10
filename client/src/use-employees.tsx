import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { EmployeeService, EmployeeDto } from './open-api';

interface EmployeeContextType {
  employees: EmployeeDto[];
  fetchEmployees: () => void;
  deleteEmployee: (id: number) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export interface Props {
  children: ReactNode;
}

export const EmployeeProvider = ({ children }: Props) => {
  const [employees, setEmployees] = useState<EmployeeDto[]>([]);

  const fetchEmployees = useCallback(async () => {
    EmployeeService.findAll().then((employees) => {
      console.log(employees);
      setEmployees(employees);
    });
  }, []);

  const deleteEmployee = useCallback(async (id: number) => {
    EmployeeService.delete(id).then(() => {
      fetchEmployees();
    });
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, fetchEmployees, deleteEmployee }}>
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
