import { Module } from '@nestjs/common'
import { TextToImageService } from './text_to_image.service'
import { TextToImageController } from './text_to_image.controller'

@Module({
  providers: [TextToImageService],
  controllers: [TextToImageController],
})
export class TextToImageModule {}
