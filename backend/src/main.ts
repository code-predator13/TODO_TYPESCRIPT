import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

import 'reflect-metadata';
// import { AppDataSource } from './config/data-source.js';

async function bootstrap() {
  // TODO: Подключить TypeORM когда MongoDB будет запущен
  // try {
  //   await AppDataSource.initialize();
  //   console.log('Database connected successfully');
  // } catch (error) {
  //   console.error('Database connection failed:', error);
  //   process.exit(1);
  // }

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  
  // Добавь CORS здесь ↓
  app.enableCors({
    origin: 'http://localhost:4000', // адрес фронтенда
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env["PORT"] ?? 3001);
  console.log(`Application is running on: http://localhost:3001/api`);
}

bootstrap();
