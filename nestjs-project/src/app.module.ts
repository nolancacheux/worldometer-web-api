import { Module } from '@nestjs/common';
import { PopulationsController } from './population/population.controller';
import { PopulationsModule } from './population/population.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopulationsService } from './population/population.service';
import { typeOrmConfig } from './config/typeorm.config';

TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'world_data',
  entities: [PopulationEntity, GovernmentEntity, SocietyEntity, EnvironmentEntity, FoodEntity, WaterEntity, EnergyEntity, HealthEntity],
  synchronize: true,
}),
