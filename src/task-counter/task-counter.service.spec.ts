import { Test, TestingModule } from '@nestjs/testing';
import { TasksCounterService } from './task-counter.service';

describe('TaskCounterService', () => {
  let service: TasksCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksCounterService],
    }).compile();

    service = module.get<TasksCounterService>(TasksCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
