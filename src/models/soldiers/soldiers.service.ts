import { InjectModel } from '@nestjs/sequelize';
import { Soldier } from './entities/soldier.entity';
import { defaultSoldiers } from './default-soldiers';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class SoldiersService implements OnModuleInit {
  constructor(
    @InjectModel(Soldier)
    private soldierModel: typeof Soldier,
  ) {}

  async findAll() {
    return this.soldierModel.findAll();
  }

  async resetTable() {
    try {
      await this.soldierModel.destroy({ truncate: true, force: true });
      return await this.soldierModel.bulkCreate(defaultSoldiers, {
        returning: true,
      });
    } catch (e) {
      console.log(e);
    }
  }

  onModuleInit() {
    this.resetTable();
  }
}
