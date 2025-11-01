import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    console.log('✅ С БД приконнектились');

    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);

    console.log(`\x1b[35;4m  🚀 сервак запустился ! \x1b[0m`);
  } catch (error) {
    console.error('❌ Что то пошло не так с самого начала:', error);
    process.exit(1);
  }
}
bootstrap();
