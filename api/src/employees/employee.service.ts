import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto, UpdateEmployeeDto } from './employee.types';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async create(employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  async update(employee: UpdateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  async delete(employeeId: number): Promise<void> {
    await this.employeeRepository.delete({
      id: employeeId
    });
  }

  async deleteAll(): Promise<void> {
    await this.employeeRepository.clear();
  }
}
