import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { environments } from 'src/config/config.module'
import { HfInference } from '@huggingface/inference'
import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { Multer } from 'multer'

@Injectable()
export class ImageToTextService {
  constructor(
    @Inject(environments.KEY)
    private readonly configService: ConfigType<typeof environments>,
  ) {}

  async ImageToText(image: string): Promise<string> {
    const hf = new HfInference(this.configService.HUGGING_FACE_TOKEN)

    const result = await hf.imageToText({
      data: fs.readFileSync(`./src/images/${image}`),
      model: 'Salesforce/blip-image-captioning-large',
    })

    return result.generated_text
  }

  async saveImage(file: Multer.File): Promise<string> {
    const uniqueFileName = uuidv4() + path.extname(file.originalname)
    const imagePath = path.join('./src/images', uniqueFileName)

    try {
      fs.writeFileSync(imagePath, file.buffer)
      return uniqueFileName
    } catch (error) {
      console.error('Error al guardar la imagen:', error)
      throw new Error('Error al guardar la imagen')
    }
  }
}
