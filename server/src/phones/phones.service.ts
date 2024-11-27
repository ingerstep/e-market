import { EntityManager, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { parsedPhoneData } from 'src/data/phones';
import { Phone } from './phone.entity';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone)
    private phonesRepository: Repository<Phone>,
    private entityManager: EntityManager,
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

  async getPhonesByCategory(category: string): Promise<Phone[]> {
    return await this.phonesRepository
      .createQueryBuilder('phone')
      .where(`phone."${category}" = :value`, { value: true })
      .getMany();
  }

  async getPhonesBySale(): Promise<Phone[]> {
    return await this.phonesRepository
      .createQueryBuilder('phone')
      .where(`phone."isDiscounted" = :value`, { value: true })
      .getMany();
  }

  async togglePhoneLike(phoneId: number, isLiked: boolean): Promise<Phone> {
    const phone = await this.phonesRepository.findOne({
      where: { id: phoneId },
    });

    if (!phone) {
      throw new Error('Phone not found');
    }

    phone.isLiked = isLiked;
    return await this.phonesRepository.save(phone);
  }

  async clearPhones(): Promise<void> {
    await this.phonesRepository.clear();
    await this.entityManager.query(
      'ALTER SEQUENCE phone_id_seq RESTART WITH 1',
    );
  }

  async seedPhones() {
    await this.clearPhones();

    for (const phone of parsedPhoneData) {
      await this.createPhone(phone as unknown as Phone);
    }
  }
}
