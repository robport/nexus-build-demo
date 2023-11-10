import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employees/employee.service';
import { EmployeeController } from './employees/employee.controller';
import { Employee } from './employees/employee.entity';
import { TestController } from './test/test.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'development',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true // set to false in production
    }),
    TypeOrmModule.forFeature([Employee])
  ],
  controllers: [AppController, EmployeeController, TestController],
  providers: [AppService, EmployeeService]
})
export class AppModule {
}
