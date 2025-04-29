import { Injectable } from '@nestjs/common';
import { CreateTemplateDoDto } from './dto/create-template-do.dto';
import { UpdateTemplateDoDto } from './dto/update-template-do.dto';

@Injectable()
export class TemplateDoService {
  create(createTemplateDoDto: CreateTemplateDoDto) {
    return 'This action adds a new templateDo';
  }

  findAll() {
    return `This action returns all templateDo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} templateDo`;
  }

  update(id: number, updateTemplateDoDto: UpdateTemplateDoDto) {
    return `This action updates a #${id} templateDo`;
  }

  remove(id: number) {
    return `This action removes a #${id} templateDo`;
  }
}
