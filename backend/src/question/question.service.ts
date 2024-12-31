import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const question = await this.prisma.question.create({
        data: {
          content: createQuestionDto.content,
        },
      });

      return question;
    } catch (error) {
      console.log('----- CHECK ERROR (CREATE) -----', error);
    }
  }

  async findAll() {
    try {
      const questions = await this.prisma.question.findMany();

      return questions;
    } catch (error) {
      console.log('----- CHECK ERROR (FINDALL) -----', error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
