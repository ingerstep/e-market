import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './phone.entity';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Phone])],
  providers: [PhonesService],
  controllers: [PhonesController],
  exports: [PhonesService],
})
export class PhonesModule {}
