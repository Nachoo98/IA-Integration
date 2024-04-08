import { Module, OnApplicationBootstrap } from '@nestjs/common'
import { Modules } from 'src/modules/modules'
import ConfigModule from '../config/config.module'

@Module({
  imports: [ConfigModule, Modules],
})
export class AppModule implements OnApplicationBootstrap {
  constructor() {}

  async onApplicationBootstrap(): Promise<void> {
    return
  }
}
