import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ChatbotService } from './chatbot.service'

@ApiTags('Chatbot')
@Controller()
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  // @Get('hello')
  // @ApiOkResponse({ type: String })
  // @ApiOperation({ description: 'Get hello msg' })
  // getHello(): string {
  //   return this.chatbotService.getHello()
  // }
}
