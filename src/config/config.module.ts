import { ConfigModule, registerAs } from '@nestjs/config'
import { validate } from './validation/config.validation'

export const environments = registerAs('config', () => {
  return {
    APP_VERSION: process.env.APP_VERSION,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  }
})

export default ConfigModule.forRoot({
  load: [environments],
  isGlobal: true,
  validate,
})
