import { Test, TestingModule } from '@nestjs/testing';
import { TaskCounterController } from './task-counter.controller';

describe('TaskCounterController', () => {
  let controller: TaskCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskCounterController],
    }).compile();

    controller = module.get<TaskCounterController>(TaskCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
