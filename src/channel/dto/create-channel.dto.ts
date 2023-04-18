import { IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly image: string;
}
