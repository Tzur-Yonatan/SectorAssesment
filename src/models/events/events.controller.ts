import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAllBetweenDates(@Query('from') from: Date, @Query('to') to: Date) {
    return this.eventsService.findAllBetweenDates(from, to);
  }
}
