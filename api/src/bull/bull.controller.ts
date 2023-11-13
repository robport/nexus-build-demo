import { ApiTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { NexusJob } from './nexus-job.type';

@ApiTags('bull')
@Controller('bull')
export class BullController {
  constructor(
    @InjectQueue('test-queue')
    private testQueue: Queue
  ) {
  }

  @Post()
  async add() {
    const job = new NexusJob('test-job');
    await this.testQueue.add('test-job', job);
  }
}
