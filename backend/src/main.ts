import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
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
