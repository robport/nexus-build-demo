import { Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateEmployeeDto, EmployeeService } from '../open-api';
import { useEmployees } from '../use-employees.tsx';

export default function CreateEmployee() {

  const { fetchEmployees } = useEmployees();

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<CreateEmployeeDto>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<CreateEmployeeDto> = async data => {
    EmployeeService.create({
      name: data.name
    }).then(() => {
      fetchEmployees();
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register('name', {
            required: true
          })}
          placeholder="Name" />
      </Form.Group>
      <Button disabled={!isValid} variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
