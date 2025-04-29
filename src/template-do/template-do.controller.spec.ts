import { Test, TestingModule } from '@nestjs/testing';
import { TemplateDoController } from './template-do.controller';
import { TemplateDoService } from './template-do.service';

describe('TemplateDoController', () => {
  let controller: TemplateDoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplateDoController],
      providers: [TemplateDoService],
    }).compile();

    controller = module.get<TemplateDoController>(TemplateDoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
