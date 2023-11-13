import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { NexusJob } from './nexus-job.type';

@Processor('test-queue')
export class TestQueueConsumer {

  @Process('test-job')
  process(job: Job<NexusJob>) {
    console.log('process test-job', job.data);
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
