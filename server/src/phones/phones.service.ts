import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Phone } from './phone.entity';
import { parsedPhoneData } from 'src/data/phones';

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

  async clearPhones(): Promise<void> {
    await this.phonesRepository.clear();
  }

  async seedPhones() {
    await this.clearPhones();

    for (const phone of parsedPhoneData) {
      await this.createPhone(phone as unknown as Phone);
    }
  }
}
