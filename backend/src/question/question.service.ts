import { Injectable, BadRequestException } from '@nestjs/common';
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
          accused: createQuestionDto.accused,
        },
      });

      return question;
    } catch (error) {
      console.log('----- CHECK ERROR (CREATE) -----', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const questions = await this.prisma.question.findMany({
        orderBy: {
          id: 'desc',
        },
      });

      return questions;
    } catch (error) {
      console.log('----- CHECK ERROR (FINDALL) -----', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const question = await this.prisma.question.findUnique({
        where: {
          id: id,
        },
      });

      return question;
    } catch (error) {
      console.log('----- CHECK ERROR (FINDALL) -----', error);
      throw error;
    }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const { guiltyCount, innocentCount } = updateQuestionDto;

    if (guiltyCount !== undefined) {
      return this.prisma.question.update({
        where: { id },
        data: {
          guiltyCount: {
            increment: guiltyCount,
          },
        },
      });
    }

    if (innocentCount !== undefined) {
      return this.prisma.question.update({
        where: { id },
        data: {
          innocentCount: {
            increment: innocentCount,
          },
        },
      });
    }

    throw new BadRequestException('No valid fields to update');
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
