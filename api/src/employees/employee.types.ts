import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateEmployeeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class EmployeeDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string
}
