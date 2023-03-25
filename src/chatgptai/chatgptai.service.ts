import { Injectable } from '@nestjs/common';
import {Configuration, OpenAIApi,CreateCompletionRequest} from 'openai';


const Default_Model ="text-davinci-003"
const Default_temp=0.9
@Injectable()   
export class ChatgptaiService {
    private  openAiApi: OpenAIApi
    constructor(){
        const configuration=new Configuration({
            // organization :'org-VssYoqBs0PQaJ4CwVgKQK2gy',
            apiKey:'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',
        });
        this.openAiApi=new OpenAIApi(configuration);
        
    }

    async getModelAnswer(qustion:string){
        console.log(qustion);
        
        try{

            const response = await this.openAiApi.createCompletion({
                model: "text-davinci-003",
                prompt: qustion,
                temperature: 1,
                max_tokens: 100,
                 n: 50,
              },
              {
                headers: {
                  Accept: 'application/json',
                },
              }
              );

              const reply=response.data.choices[0].text.replace(/\n/g, ' ');
            console.log(reply);
            
            return {
                "answer":response.data.choices[0].text.replace(/\n/g, ' ')
            }
        }
        catch(err){
            return err;
        }
    }
}
