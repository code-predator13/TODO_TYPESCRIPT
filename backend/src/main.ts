import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './entities/data-source';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  try {
    // Инициализация подключения к БД
    await AppDataSource.initialize();
    console.log('✅ Database connected successfully');
    
    console.log('🚀 Server started');
  } catch (error) {
    console.error('❌ Error during server startup:', error);
    process.exit(1);
  }
}
bootstrap();
