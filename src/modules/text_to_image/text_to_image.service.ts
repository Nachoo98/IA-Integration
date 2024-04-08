import { Injectable } from '@nestjs/common'
import { promises as fs } from 'fs'

@Injectable()
export class TextToImageService {
  constructor() {}

  async generateImageFromText(input: string): Promise<any> {
    const headers = {
      Authorization: 'Bearer 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',
    }

    async function query(data) {
      const response = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
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
      await fs.writeFile(filePath, Buffer.from(imageBytes))
      console.log(`Image saved to: ${filePath}`)
      return 'Image created'
    } catch (error) {
      console.error(error)
    }
  }
}
