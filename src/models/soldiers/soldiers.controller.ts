import { Controller, Get } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';

@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}
  @Get()
  findAll() {
    return this.soldiersService.findAll();
  }
}
