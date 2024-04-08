import { Module } from '@nestjs/common'
import { RouterModule } from 'nest-router'
import { Routes } from '@nestjs/core'
import { VersionModule } from './version/version.module'
import { ChatbotModule } from './chatbot/chatbot.module'
import { TextToImageModule } from './text_to_image/text_to_image.module'

const routes: Routes = [
  {
    path: 'version',
    module: VersionModule,
  },
  {
    path: 'chatbot',
    module: ChatbotModule,
  },
  {
    path: 'text-to-image',
    module: TextToImageModule,
  },
]

@Module({
  imports: [RouterModule.forRoutes(routes), VersionModule, ChatbotModule, TextToImageModule],
})
export class Modules {}
