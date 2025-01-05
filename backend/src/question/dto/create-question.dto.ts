import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'Content is too short',
  })
  @MaxLength(280, {
    message: 'Content is too long',
  })
  content: string;

  @IsString()
  @MinLength(1, {
    message: 'Accused name is too short',
  })
  @MaxLength(180, {
    message: 'Accused name is too long',
  })
  accused: string;
}
