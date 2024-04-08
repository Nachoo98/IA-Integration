import { IsNumber, IsString } from 'class-validator'

export class RandomFactDto {
  @IsString()
  fact: string

  @IsNumber()
  length: number
}
