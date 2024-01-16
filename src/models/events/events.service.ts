import { Op } from 'sequelize';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { InjectModel } from '@nestjs/sequelize';
import { defaultEvents } from './default-events';

@Injectable()
export class EventsService implements OnModuleInit {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async findAll() {
    return this.eventModel.findAll();
  }

  async findAllBetweenDates(startDate?: Date, endDate?: Date) {
    return this.eventModel.findAll({
      where: {
        time: {
          ...(startDate && { [Op.gte]: startDate }),
          ...(endDate && { [Op.lte]: endDate }),
        },
      },
    });
  }

  async resetTable() {
    await this.eventModel.destroy({ truncate: true, force: true });
    await this.eventModel.bulkCreate(defaultEvents);
  }

  onModuleInit() {
    this.resetTable();
  }
}
