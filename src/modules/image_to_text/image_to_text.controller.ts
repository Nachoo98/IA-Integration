import { Controller, Get, HttpCode, HttpStatus, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ImageToTextService } from './image_to_text.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { Multer } from 'multer'

@ApiTags('Image To Text')
@Controller()
export class ImageToTextController {
  constructor(private readonly imageToTextService: ImageToTextService) {}

  @Get()
  @ApiOkResponse({ type: String })
  @ApiOperation({ description: 'Get generated images' })
  async getIAImages(@Query('image') image: string): Promise<string> {
    return await this.imageToTextService.ImageToText(image)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  @HttpCode(HttpStatus.OK)
  async uploadImage(@UploadedFile() file: Multer.File): Promise<string> {
    if (!file) throw new Error('No se ha subido ninguna imagen')
    return await this.imageToTextService.saveImage(file)
  }
}
