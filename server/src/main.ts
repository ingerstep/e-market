import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PhonesService } from './phones/phones.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const phonesSeedService = app.get(PhonesService);
  await phonesSeedService.seedPhones();
  await app.listen(3000);
}
bootstrap();
