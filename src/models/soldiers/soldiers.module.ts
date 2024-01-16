import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { Soldier } from './entities/soldier.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { SoldiersController } from './soldiers.controller';

@Module({
  providers: [SoldiersService],
  controllers: [SoldiersController],
  imports: [SequelizeModule.forFeature([Soldier])],
})
export class SoldiersModule {}
