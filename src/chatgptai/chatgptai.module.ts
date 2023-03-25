import { Module } from '@nestjs/common';
import { ChatgptaiController } from './chatgptai.controller';
import { ChatgptaiService } from './chatgptai.service';

@Module({
  controllers: [ChatgptaiController],
  providers: [ChatgptaiService]
})
export class ChatgptaiModule {}
