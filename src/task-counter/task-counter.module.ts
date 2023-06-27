import { Module } from '@nestjs/common';
import { TasksCounterService } from './task-counter.service';

@Module({
  // providers: [TasksCounterService],
})
export class TasksCounterModule {}
