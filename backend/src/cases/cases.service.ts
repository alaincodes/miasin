import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { join } from 'path';

const FILE_PATH = join(__dirname, '../../data/cases.json');

@Injectable()
export class CasesService {
  private async readCasesFromFile() {
    try {
      const data = await fs.readFile(FILE_PATH, 'utf8');

      return JSON.parse(data);
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  async findById(id: number) {
    const cases = await this.readCasesFromFile();

    return cases.find((caseItem) => caseItem.id === id);
  }

  async findAll() {
    return await this.readCasesFromFile();
  }

  async create(newCase: any) {
    const cases = await this.readCasesFromFile();
    const newId = Math.max(...cases.map((caseItem) => caseItem.id)) + 1;
    const newCaseWithId = { ...newCase, id: newId };

    cases.push(newCaseWithId);

    await fs.writeFile(FILE_PATH, JSON.stringify(cases, null, 2));

    return newCaseWithId;
  }

  async update(id: number, updatedCase: any) {
    const cases = await this.readCasesFromFile();
    const index = cases.findIndex((caseItem) => caseItem.id === id);

    if (index === -1) return null;

    const updatedCaseWithId = { ...updatedCase, id };

    cases[index] = updatedCaseWithId;
    await fs.writeFile(FILE_PATH, JSON.stringify(cases, null, 2));

    return updatedCaseWithId;
  }

  async delete(id: number) {
    const cases = await this.readCasesFromFile();
    const updatedCases = cases.filter((caseItem) => caseItem.id !== id);

    if (updatedCases.length === cases.length) return null;

    await fs.writeFile(FILE_PATH, JSON.stringify(updatedCases, null, 2));

    return { id };
  }
}
