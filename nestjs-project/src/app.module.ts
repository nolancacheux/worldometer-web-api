import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Population } from './entities/population.entity';
import { GovernmentEconomy } from './entities/government-economy.entity';
import { SocietyMedia } from './entities/society-media.entity';
import { Environment } from './entities/environment.entity';
import { Food } from './entities/food.entity';
import { Water } from './entities/water.entity';
import { Energy } from './entities/energy.entity';
import { Health } from './entities/health.entity';
import { PopulationController } from './controllers/population.controller';
import { GovernmentEconomyController } from './controllers/government-economy.controller';
import { SocietyMediaController } from './controllers/society-media.controller';
import { EnvironmentController } from './controllers/environment.controller';
import { FoodController } from './controllers/food.controller';
import { WaterController } from './controllers/water.controller';
import { EnergyController } from './controllers/energy.controller';
import { HealthController } from './controllers/health.controller';
import { PopulationService } from './services/population.service';
import { GovernmentEconomyService } from './services/government-economy.service';
import { SocietyMediaService } from './services/society-media.service';
import { EnvironmentService } from './services/environment.service';
import { FoodService } from './services/food.service';
import { WaterService } from './services/water.service';
import { EnergyService } from './services/energy.service';
import { HealthService } from './services/health.service';
import { DataInsertionService } from './services/data-insertion.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'worldometers',
      entities: [
        Population,
        GovernmentEconomy,
        SocietyMedia,
        Environment,
        Food,
        Water,
        Energy,
        Health,
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      Population,
      GovernmentEconomy,
      SocietyMedia,
      Environment,
      Food,
      Water,
      Energy,
      Health,
    ]),
  ],
  controllers: [
    PopulationController,
    GovernmentEconomyController,
    SocietyMediaController,
    EnvironmentController,
    FoodController,
    WaterController,
    EnergyController,
    HealthController,
  ],
  providers: [
    PopulationService,
    GovernmentEconomyService,
    SocietyMediaService,
    EnvironmentService,
    FoodService,
    WaterService,
    EnergyService,
    HealthService,
    DataInsertionService,
  ],
})
export class AppModule {}
