import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  create(@Body() createCaseDto: CreateCaseDto) {
    return this.casesService.create(createCaseDto);
  }

  @Get()
  findAll() {
    return this.casesService.findAll();
  }

  @Get(':id')
  async getCaseById(@Param('id') id: string) {
    const caseId = parseInt(id, 10);
    if (isNaN(caseId)) {
      return { error: 'Invalid ID format' };
    }

    const caseData = await this.casesService.findById(caseId);

    if (!caseData) {
      return { error: 'Case not found' };
    }

    return caseData;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCaseDto: UpdateCaseDto) {
    return this.casesService.update(id, updateCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.casesService.delete(id);
  }
}
