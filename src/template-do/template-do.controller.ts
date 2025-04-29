import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemplateDoService } from './template-do.service';
import { CreateTemplateDoDto } from './dto/create-template-do.dto';
import { UpdateTemplateDoDto } from './dto/update-template-do.dto';

@Controller('template-do')
export class TemplateDoController {
  constructor(private readonly templateDoService: TemplateDoService) {}

  @Post()
  create(@Body() createTemplateDoDto: CreateTemplateDoDto) {
    return this.templateDoService.create(createTemplateDoDto);
  }

  @Get()
  findAll() {
    return this.templateDoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateDoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDoDto: UpdateTemplateDoDto) {
    return this.templateDoService.update(+id, updateTemplateDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateDoService.remove(+id);
  }
}
