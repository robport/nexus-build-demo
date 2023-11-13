import { ApiProperty } from '@nestjs/swagger';

export class ResetDto {
  @ApiProperty()
  numberOfEmployees: number;
}
