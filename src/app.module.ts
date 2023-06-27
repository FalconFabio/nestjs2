import { Module } from '@nestjs/common';
import { TasksCounterModule } from './task-counter/task-counter.module';
import { TodoCountController } from './task-counter/task-counter.controller';
import { TasksCounterService } from './task-counter/task-counter.service';

@Module({
  imports: [TasksCounterModule],
  controllers: [TodoCountController],
  providers: [TasksCounterService],
})
export class AppModule {}
