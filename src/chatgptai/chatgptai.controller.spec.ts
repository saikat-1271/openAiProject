import { Test, TestingModule } from '@nestjs/testing';
import { ChatgptaiController } from './chatgptai.controller';

describe('ChatgptaiController', () => {
  let controller: ChatgptaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatgptaiController],
    }).compile();

    controller = module.get<ChatgptaiController>(ChatgptaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
