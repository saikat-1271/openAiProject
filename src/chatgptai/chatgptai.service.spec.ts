import { Test, TestingModule } from '@nestjs/testing';
import { ChatgptaiService } from './chatgptai.service';

describe('ChatgptaiService', () => {
  let service: ChatgptaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatgptaiService],
    }).compile();

    service = module.get<ChatgptaiService>(ChatgptaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
