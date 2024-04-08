import { Controller, Get, Post, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { TextToImageService } from './text_to_image.service'

@ApiTags('Text To Image')
@Controller()
export class TextToImageController {
  constructor(private readonly textToImageService: TextToImageService) {}

  @Get()
  @ApiOkResponse({ type: String })
  @ApiOperation({ description: 'Get generated images' })
  async getIAImages(): Promise<object[]> {
    return await this.textToImageService.getIAImages()
  }

  @Post()
  @ApiOkResponse({ type: String })
  @ApiOperation({ description: 'Generate an IA image from text input' })
  async generateImageFromText(@Query('input') text: string): Promise<object> {
    return await this.textToImageService.generateImageFromText(text)
  }
}
