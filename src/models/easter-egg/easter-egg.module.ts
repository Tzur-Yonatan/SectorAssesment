import { Module } from '@nestjs/common';
import { EasterEggService } from './easter-egg.service';
import { PlzDontLookHere } from './entities/plz-dont-look-here.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { EasterEggController } from './easter-egg.controller';

@Module({
  providers: [EasterEggService],
  controllers: [EasterEggController],
  imports: [SequelizeModule.forFeature([PlzDontLookHere])],
})
export class EasterEggModule {}
