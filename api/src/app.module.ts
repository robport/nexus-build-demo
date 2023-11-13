import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employees/employee.service';
import { EmployeeController } from './employees/employee.controller';
import { Employee } from './employees/employee.entity';
import { TestController } from './test/test.controller';
import { RedisController } from './redis/redis.controller';
import { BullModule } from '@nestjs/bull';
import { BullController } from './bull/bull.controller';
import { TestQueueConsumer } from './bull/job-processor';

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
    TypeOrmModule.forFeature([Employee]),
    // BullModule.forRoot({
    //   redis: {
    //     host: process.env['REDIS_HOST'],
    //     port: Number.parseInt(process.env['REDIS_PORT']),
    //     password: process.env['REDIS_PASSWORD']
    //   }
    // }),
    // BullModule.registerQueue({
    //   name: 'test-queue'
    // })
  ],
  controllers: [
    AppController,
    EmployeeController,
    TestController,
    // BullController,
    RedisController,
  ],
  providers: [
    AppService,
    EmployeeService,
    // TestQueueConsumer,
  ]
})
export class AppModule {
}
