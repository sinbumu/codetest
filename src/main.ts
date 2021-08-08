import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //pipes setting
  app.useGlobalPipes(new ValidationPipe(
    {transform: true, transformOptions: { enableImplicitConversion: true }},
  ));

  //swagger setting
  const swagger = await import('@nestjs/swagger')

  const options = new swagger.DocumentBuilder()
  .setTitle('TestApi')
  .setDescription('Description')
  .setVersion('1.0')
  .build();
  const document = swagger.SwaggerModule.createDocument(app, options);
  swagger.SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
