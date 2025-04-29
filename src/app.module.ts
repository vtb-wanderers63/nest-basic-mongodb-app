import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateDoModule } from './template-do/template-do.module';

@Module({
  imports: [HealthModule, MongooseModule.forRoot('mongodb://localhost/template-animal'), TemplateDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
