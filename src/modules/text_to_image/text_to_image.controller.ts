import { Controller, Get, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { TextToImageService } from './text_to_image.service'

@ApiTags('Text To Image')
@Controller()
export class TextToImageController {
  constructor(private readonly textToImageService: TextToImageService) {}

  @Get('generate-ia-image')
  @ApiOkResponse({ type: String })
  @ApiOperation({ description: 'Generate an IA image from text input' })
  async generateImageFromText(@Query('input') text: string): Promise<string> {
    return await this.textToImageService.generateImageFromText(text)
  }
}
