import { Injectable } from '@nestjs/common';

import { parsedPhoneData } from 'src/data/phones';
import { Phone } from 'src/phones/phone.entity';
import { PhonesService } from 'src/phones/phones.service';

@Injectable()
export class PhonesSeedService {
  constructor(private readonly phonesService: PhonesService) {}

  async seedPhones() {
    await this.phonesService.clearPhones();

    for (const phone of parsedPhoneData) {
      await this.phonesService.createPhone(phone as unknown as Phone);
    }
  }
}
