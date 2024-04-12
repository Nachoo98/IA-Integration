import { Module } from '@nestjs/common'
import { ImageToTextService } from './image_to_text.service'
import { ImageToTextController } from './image_to_text.controller'

@Module({
  providers: [ImageToTextService],
  controllers: [ImageToTextController],
})
export class ImageToTextModule {}
