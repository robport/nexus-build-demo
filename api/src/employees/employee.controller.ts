import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto, CreateEmployeeDto, UpdateEmployeeDto } from './employee.types';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService
  ) {
  }

  @Get()
  @ApiResponse({type: EmployeeDto, isArray: true})
  async findAll(): Promise<EmployeeDto[]> {
    return await this.employeeService.findAll();
  }

  @Post()
  async create(
    @Body() employee: CreateEmployeeDto
  ): Promise<EmployeeDto> {
    return this.employeeService.create(employee);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() employee: UpdateEmployeeDto
  ): Promise<EmployeeDto> {
    return this.employeeService.update(employee);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number
  ): Promise<void> {
    return this.employeeService.delete(id);
  }

}
