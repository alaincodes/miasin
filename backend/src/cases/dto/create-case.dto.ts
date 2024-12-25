export class CreateCaseDto {
  accuser: string;
  accused: string;
  date: string;
  time: string;
  message: string;
  user: string;
  judgement: string;
  guiltyCount: number;
  innocentCount: number;
  topics: string[];
}
