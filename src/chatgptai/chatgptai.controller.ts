import { Controller, Post, Get ,Body } from '@nestjs/common';
import {ChatgptaiService} from './chatgptai.service'
import {QustionParams} from './dto/qustionInput.dto'
@Controller('chatgptai')
export class ChatgptaiController {


    constructor(private readonly chatgptaiService:ChatgptaiService){}
    
    @Post()
    async getAnswer( @Body() data:QustionParams){
        console.log(data);
        
        return await this.chatgptaiService.getModelAnswer(data.qustion);
    }
}
