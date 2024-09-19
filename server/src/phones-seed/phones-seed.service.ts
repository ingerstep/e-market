import { Injectable } from '@nestjs/common';

import { phonesData } from 'src/data/phones';
import { Phone } from 'src/phones/phone.entity';
import { PhonesService } from 'src/phones/phones.service';

@Injectable()
export class PhonesSeedService {
  constructor(private readonly phonesService: PhonesService) {}
  async seedPhones() {
    const phones = phonesData;

    for (const phone of phones) {
      await this.phonesService.createPhone(phone as Phone);
    }
  }
}
