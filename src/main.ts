import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const HTTP_PORT = process.env.HTTP_SERVER_PORT || process.env.PORT

  await app.listen(HTTP_PORT, "0.0.0.0");
}
bootstrap();
