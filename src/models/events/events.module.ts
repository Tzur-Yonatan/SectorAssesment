import { Module } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsController } from './events.controller';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [SequelizeModule.forFeature([Event])],
})
export class EventsModule {}
