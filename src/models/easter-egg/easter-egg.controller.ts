import { Controller, Get } from '@nestjs/common';
import { EasterEggService } from './easter-egg.service';

@Controller('easterEgg')
export class EasterEggController {
  constructor(private readonly easterEggService: EasterEggService) {}
  @Get()
  findAll() {
    return this.easterEggService.findAll();
  }
}
