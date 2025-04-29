import { Module } from '@nestjs/common';
import { AnimalsService } from './template-do.service';
import { TemplateDoController } from './template-do.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema, Animal } from './schema/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
  ],
  controllers: [TemplateDoController],
  providers: [AnimalsService],
})
export class TemplateDoModule {}
