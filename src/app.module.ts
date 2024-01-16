import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventsModule } from './models/events/events.module';
import { SoldiersModule } from './models/soldiers/soldiers.module';
import { EasterEggModule } from './models/easter-egg/easter-egg.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    EventsModule,
    SoldiersModule,
    EasterEggModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
