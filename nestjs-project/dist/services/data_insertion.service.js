"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataInsertionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const population_entity_1 = require("../entities/population.entity");
const government_economy_entity_1 = require("../entities/government_economy.entity");
const society_media_entity_1 = require("../entities/society_media.entity");
const environment_entity_1 = require("../entities/environment.entity");
const food_entity_1 = require("../entities/food.entity");
const water_entity_1 = require("../entities/water.entity");
const energy_entity_1 = require("../entities/energy.entity");
const health_entity_1 = require("../entities/health.entity");
const child_process_1 = require("child_process");
const path = require("path");
async function getWorldometerData() {
    return new Promise((resolve, reject) => {
        const worldometerDataPath = path.join(__dirname, '..', '..', 'src', 'services', 'worldometer_data.py');
        (0, child_process_1.exec)(`python "${worldometerDataPath}"`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(JSON.parse(stdout));
            }
        });
    });
}
let DataInsertionService = class DataInsertionService {
    constructor(populationRepository, governmentEconomyRepository, societyMediaRepository, environmentRepository, foodRepository, waterRepository, energyRepository, healthRepository) {
        this.populationRepository = populationRepository;
        this.governmentEconomyRepository = governmentEconomyRepository;
        this.societyMediaRepository = societyMediaRepository;
        this.environmentRepository = environmentRepository;
        this.foodRepository = foodRepository;
        this.waterRepository = waterRepository;
        this.energyRepository = energyRepository;
        this.healthRepository = healthRepository;
    }
    async insertData() {
        const worldometerData = await getWorldometerData();
        await this.populationRepository.insert({
            created_at: new Date(),
            current_population: worldometerData.current_world_population,
            births_this_year: worldometerData.births_this_year,
            births_today: worldometerData.births_today,
            deaths_this_year: worldometerData.deaths_this_year,
            deaths_today: worldometerData.deaths_today,
            growth_this_year: worldometerData.net_population_growth_this_year,
            growth_today: worldometerData.net_population_growth_today,
        });
        await this.governmentEconomyRepository.insert({
            created_at: new Date(),
            global_health_spending_today: worldometerData.public_healthcare_expenditure_today,
            global_education_spending_today: worldometerData.public_education_expenditure_today,
            global_military_spending_today: worldometerData.public_military_expenditure_today,
            cars_produced_this_year: worldometerData.cars_produced_this_year,
            bicycles_produced_this_year: worldometerData.bicycles_produced_this_year,
            computers_sold_this_year: worldometerData.computers_produced_this_year,
        });
        await this.societyMediaRepository.insert({
            created_at: new Date(),
            new_books_published_this_year: worldometerData.new_book_titles_published_this_year,
            newspaper_copies_printed_today: worldometerData.newspapers_circulated_today,
            tvs_sold_today: worldometerData.tv_sets_sold_worldwide_today,
            mobile_phones_sold_today: worldometerData.cellular_phones_sold_today,
            video_games_spending_today: worldometerData.money_spent_on_videogames_today,
            internet_users_in_the_world: worldometerData.internet_users_in_the_world_today,
            emails_sent_today: worldometerData.emails_sent_today,
            blog_posts_written_today: worldometerData.blog_posts_written_today,
            tweets_sent_today: worldometerData.tweets_sent_today,
            google_searches_today: worldometerData.google_searches_today,
        });
        await this.environmentRepository.insert({
            created_at: new Date(),
            forest_area_lost_this_year: worldometerData.forest_loss_this_year,
            arable_land_lost_this_year: worldometerData.land_lost_to_soil_erosion_this_year,
            co2_emissions_this_year: worldometerData.co2_emissions_this_year,
            desertification_this_year: worldometerData.desertification_this_year,
            toxic_chemicals_released_this_year: worldometerData.toxic_chemicals_released_in_the_environment_this_year,
        });
        await this.foodRepository.insert({
            created_at: new Date(),
            undernourished_people_in_the_world: worldometerData.undernourished_people_in_the_world,
            overweight_people_in_the_world: worldometerData.overweight_people_in_the_world,
            obese_people_in_the_world: worldometerData.obese_people_in_the_world,
            people_who_died_of_hunger_today: worldometerData.people_who_died_of_hunger_today,
            money_spent_on_obesity_related_illnesses_in_us_today: worldometerData.money_spent_for_obesity_related_diseases_in_the_usa_today,
            money_spent_on_weight_loss_programs_in_us_today: worldometerData.money_spent_on_weight_loss_programs_in_the_usa_today,
        });
        await this.waterRepository.insert({
            created_at: new Date(),
            water_used_this_year: worldometerData.water_used_this_year,
            water_related_deaths_this_year: worldometerData.deaths_caused_by_water_related_diseases_this_year,
            people_without_access_to_clean_water: worldometerData.people_with_no_access_to_a_safe_drinking_water_source,
        });
        await this.energyRepository.insert({
            created_at: new Date(),
            energy_used_today: worldometerData.energy_used_today,
            non_renewable_sources_used_today: worldometerData.non_renewable_sources,
            renewable_sources_used_today: worldometerData.renewable_sources,
            solar_energy_reaching_earth_today: worldometerData.solar_energy_striking_earth_today,
            oil_pumped_today: worldometerData.oil_pumped_today,
            oil_remaining: worldometerData.oil_left,
            days_to_the_end_of_oil: worldometerData.days_to_the_end_of_oil,
            gas_remaining: worldometerData.natural_gas_left,
            days_to_the_end_of_gas: worldometerData.days_to_the_end_of_natural_gas,
            coal_remaining: worldometerData.coal_left,
            days_to_the_end_of_coal: worldometerData.days_to_the_end_of_coal,
        });
        await this.healthRepository.insert({
            created_at: new Date(),
            deaths_of_children_under_five_this_year: worldometerData.deaths_of_children_under_5_this_year,
            abortions_this_year: worldometerData.abortions_this_year,
            maternal_deaths_this_year: worldometerData.deaths_of_mothers_during_birth_this_year,
            people_infected_with_hiv_aids: worldometerData.hiv_aids_infected_people,
            deaths_caused_by_hiv_aids_this_year: worldometerData.deaths_caused_by_hiv_aids_this_year,
            deaths_caused_by_cancer_this_year: worldometerData.deaths_caused_by_cancer_this_year,
            deaths_caused_by_malaria_this_year: worldometerData.deaths_caused_by_malaria_this_year,
            cigarettes_smoked_today: worldometerData.cigarettes_smoked_today,
            deaths_caused_by_smoking_this_year: worldometerData.deaths_caused_by_smoking_this_year,
            deaths_caused_by_alcohol_this_year: worldometerData.deaths_caused_by_alcohol_this_year,
            suicides_this_year: worldometerData.suicides_this_year,
            money_spent_on_illegal_drugs_this_year: worldometerData.money_spent_on_illegal_drugs_this_year,
            deaths_caused_by_road_traffic_accidents_this_year: worldometerData.road_traffic_accident_fatalities_this_year,
        });
    }
};
DataInsertionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(population_entity_1.Population)),
    __param(1, (0, typeorm_1.InjectRepository)(government_economy_entity_1.GovernmentEconomy)),
    __param(2, (0, typeorm_1.InjectRepository)(society_media_entity_1.SocietyMedia)),
    __param(3, (0, typeorm_1.InjectRepository)(environment_entity_1.Environment)),
    __param(4, (0, typeorm_1.InjectRepository)(food_entity_1.Food)),
    __param(5, (0, typeorm_1.InjectRepository)(water_entity_1.Water)),
    __param(6, (0, typeorm_1.InjectRepository)(energy_entity_1.Energy)),
    __param(7, (0, typeorm_1.InjectRepository)(health_entity_1.Health)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DataInsertionService);
exports.DataInsertionService = DataInsertionService;
//# sourceMappingURL=data_insertion.service.js.map