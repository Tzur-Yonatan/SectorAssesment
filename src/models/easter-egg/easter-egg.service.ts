import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PlzDontLookHere } from './entities/plz-dont-look-here.entity';

@Injectable()
export class EasterEggService {
  constructor(
    @InjectModel(PlzDontLookHere)
    private dontLookModel: typeof PlzDontLookHere,
  ) {}

  async findAll() {
    return this.dontLookModel.findAll();
  }
}
