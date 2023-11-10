import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { ResetDto } from './test.types';
import { EmployeeService } from '../employees/employee.service';
import { faker } from '@faker-js/faker';

@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(
    private employeeService: EmployeeService
  ) {
  }

  @Post('reset')
  @ApiBody({ type: ResetDto })
  async reset(
    @Body() resetDto: ResetDto
  ) {
    console.log('hello')
    await this.employeeService.deleteAll();
    for (let i = 0; i < resetDto.numberOfEmployees; i++) {
      await this.employeeService.create({
        name: faker.person.fullName()
      });
    }
  }
}
