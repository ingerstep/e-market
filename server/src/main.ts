import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PhonesSeedService } from './phones-seed/phones-seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const phonesSeedService = app.get(PhonesSeedService);
  await phonesSeedService.seedPhones();
  await app.listen(3000);
}
bootstrap();
