import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import * as fs from 'fs'
import { environments } from 'src/config/config.module'

@Injectable()
export class TextToImageService {
  constructor(
    @Inject(environments.KEY)
    private readonly configService: ConfigType<typeof environments>,
  ) {}

  async getIAImages(): Promise<object[]> {
    const files = fs.readdirSync('./src/images')

    return files.map((f, idx) => {
      return { id: idx + 1, name: f }
    })
  }

  async generateImageFromText(input: string): Promise<object> {
    const headers = {
      Authorization: 'Bearer ' + this.configService.HUGGING_FACE_TOKEN,
    }
    const url = this.configService.HUGGING_FACE_URL + 'stabilityai/stable-diffusion-xl-base-1.0'

    async function query(data) {
      const response = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data),
      })
      const result = await response.arrayBuffer()
      return result
    }

    try {
      const imageBytes = await query({
        inputs: input,
      })

      const fileName = `${input.replace(/\s+/g, '-')}.png`
      const filePath = './src/images/' + fileName
      await fs.promises.writeFile(filePath, Buffer.from(imageBytes))

      return { response: 'Image created', status: 201 }
    } catch (error) {
      console.error(error)
    }
  }
}
