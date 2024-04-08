import { ConfigModule, registerAs } from '@nestjs/config'
import { validate } from './validation/config.validation'

export const environments = registerAs('config', () => {
  return {
    APP_VERSION: process.env.APP_VERSION,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    HUGGING_FACE_URL: process.env.HUGGING_FACE_URL,
    HUGGING_FACE_TOKEN: process.env.HUGGING_FACE_TOKEN,
  }
})

export default ConfigModule.forRoot({
  load: [environments],
  isGlobal: true,
  validate,
})
