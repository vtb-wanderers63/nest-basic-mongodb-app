import { PartialType } from '@nestjs/swagger';
import { CreateTemplateDoDto } from './create-template-do.dto';

export class UpdateTemplateDoDto extends PartialType(CreateTemplateDoDto) {}
