import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Population } from '../entities/population.entity';
import { GovernmentEconomy } from '../entities/government-economy.entity';
import { SocietyMedia } from '../entities/society-media.entity';
import { Environment } from '../entities/environment.entity';
import { Food } from '../entities/food.entity';
import { Water } from '../entities/water.entity';
import { Energy } from '../entities/energy.entity';
import { Health } from '../entities/health.entity';

@Injectable()
export class DataInsertionService {
  constructor(
    @InjectRepository(Population)
    private readonly populationRepository: Repository<Population>,
    @InjectRepository(GovernmentEconomy)
    private readonly governmentEconomyRepository: Repository<GovernmentEconomy>,
    @InjectRepository(SocietyMedia)
    private readonly societyMediaRepository: Repository<SocietyMedia>,
    @InjectRepository(Environment)
    private readonly environmentRepository: Repository<Environment>,
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
    @InjectRepository(Water)
    private readonly waterRepository: Repository<Water>,
    @InjectRepository(Energy)
    private readonly energyRepository: Repository<Energy>,
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>,
  ) {}

  async insertData(): Promise<void> {
    await this.populationRepository.insert({
      createdAt: new Date(),
      currentPopulation: 8022968573,
      birthsThisYear: 28890580,
      birthsToday: 257067,
      deathsThisYear: 14467049,
      deathsToday: 128727,
      growthThisYear: 14423531,
      growthToday: 128340,
    });

    // Ajoutez les autres requêtes d'insertion ici, en utilisant la même méthode pour chaque entité.

    // Exemple :
    await this.governmentEconomyRepository.insert({
      createdAt: new Date(),
      globalHealthSpendingToday: 9333000000,
      globalEducationSpendingToday: 4960000000,
      globalMilitarySpendingToday: 1915000000,
      carsProducedThisYear: 78902622,
      bicyclesProducedThisYear: 133877527,
      computersSoldThisYear: 353182016,
    });

    // Continuez avec les autres entités...

  }
}
