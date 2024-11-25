import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { Phone } from './phone.entity';

@Controller('catalog/phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  getAllPhones(): Promise<Phone[]> {
    return this.phonesService.getAllPhones();
  }

  @Get(':id')
  getPhone(@Param('id') id: string): Promise<Phone> {
    return this.phonesService.getPhone(+id);
  }

  @Post()
  createPhone(@Body() phone: Phone): Promise<Phone> {
    return this.phonesService.createPhone(phone);
  }

  @Get('newarrival')
  getNewArrivalPhones(): Promise<Phone[]> {
    return this.phonesService.getPhonesByCategory('isNewArrival');
  }

  @Get('bestsellers')
  getBestsellerPhones(): Promise<Phone[]> {
    return this.phonesService.getPhonesByCategory('isBestseller');
  }

  @Get('featured')
  getFeaturedPhones(): Promise<Phone[]> {
    return this.phonesService.getPhonesByCategory('isFeatured');
  }

  @Get('discounted')
  getDiscountedPhones(): Promise<Phone[]> {
    return this.phonesService.getPhonesByCategory('isDiscounted');
  }
}
