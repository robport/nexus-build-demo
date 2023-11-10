import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEmployees } from '../use-employees.tsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateEmployeeDto, EmployeeService } from '../open-api';
import { Form } from 'react-bootstrap';

function CreateEmployeeDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      handleClose();
    });
  };

  return (
    <>
      <Button variant="primary"
              data-e2e="open-create-employee-dialog"
              onClick={handleShow}>
        Create Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register('name', {
                  required: true
                })}
                data-e2e="create-employee-name"
                placeholder="Name" />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button disabled={!isValid}
                    data-e2e="save-employee-button"
                    variant="primary"
                    type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateEmployeeDialog;
