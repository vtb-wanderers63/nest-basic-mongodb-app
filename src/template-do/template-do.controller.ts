import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalsService } from './template-do.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('template-do')
export class TemplateDoController {
  constructor(private readonly AnimalsService: AnimalsService) {}

  @Post()
  create(@Body() CreateAnimalDto: CreateAnimalDto) {
    return this.AnimalsService.create(CreateAnimalDto);
  }

  @Get()
  findAll() {
    return this.AnimalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AnimalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateAnimalDto: UpdateAnimalDto) {
    return this.AnimalsService.update(+id, UpdateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AnimalsService.remove(+id);
  }
}
