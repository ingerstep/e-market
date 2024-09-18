import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone)
    private phonesRepository: Repository<Phone>,
  ) {}

  getAllPhones(): Promise<Phone[]> {
    return this.phonesRepository.find();
  }

  getPhone(id: number): Promise<Phone> {
    return this.phonesRepository.findOneBy({ id });
  }

  createPhone(phone: Phone): Promise<Phone> {
    return this.phonesRepository.save(phone);
  }
}
