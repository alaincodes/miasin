import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 280)
  content: string;
}
