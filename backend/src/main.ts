import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
  try {
    await AppDataSource.initialize();
    console.log('✅ Database connected successfully');

    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: 'http://localhost:4000',
      credentials: true,
    });

    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT ?? 3000);

    console.log(
      `\x1b[35;4m 🚀 Server is running on: http://localhost:${process.env.PORT ?? 3000}/api\x1b[0m`,
    );
  } catch (error) {
    console.error('❌ Error during server startup:', error);
    process.exit(1);
  }
}

bootstrap();
