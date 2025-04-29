import { Module } from '@nestjs/common';
import { TemplateDoService } from './template-do.service';
import { TemplateDoController } from './template-do.controller';

@Module({
  controllers: [TemplateDoController],
  providers: [TemplateDoService],
})
export class TemplateDoModule {}
