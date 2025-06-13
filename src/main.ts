import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const format =
    ':method :url :status :res[content-length] - :response-time ms';

  // HTTP request logging middleware
  const morganMiddleware = morgan(format, {
    stream: {
      write: (message: string) => {
        Logger.log(message.trim(), 'HTTP');
        return true;
      },
    },
  });

  app.use(morganMiddleware);

  const config = new DocumentBuilder()
    .setTitle('Basic Nest and MongoDB API')
    .setDescription('This is a basic Nest and MongoDB API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
