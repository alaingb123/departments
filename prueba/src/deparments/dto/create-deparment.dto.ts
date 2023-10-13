
import { IsString, Length } from 'class-validator';

export class CreateDeparmentDto {
  @IsString()
  @Length(1, 50)
  name: string;
}