import { PhonesService } from './phones.service';
import { Phone } from './phone.entity';

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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

  @Get('category/:category')
  getPhonesByCategory(@Param('category') category: string): Promise<Phone[]> {
    return this.phonesService.getPhonesByCategory(category);
  }

  @Get('category/:discounted')
  getPhonesBySale(): Promise<Phone[]> {
    return this.phonesService.getPhonesBySale();
  }

  @Patch(':id/like')
  async toggleLike(
    @Param('id') id: string,
    @Body() body: { isLiked: boolean },
  ): Promise<Phone> {
    const productId = parseInt(id, 10);
    const { isLiked } = body;

    return await this.phonesService.togglePhoneLike(productId, isLiked);
  }
}
