import { Test, TestingModule } from '@nestjs/testing';
import { TemplateDoService } from './template-do.service';

describe('TemplateDoService', () => {
  let service: TemplateDoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplateDoService],
    }).compile();

    service = module.get<TemplateDoService>(TemplateDoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
