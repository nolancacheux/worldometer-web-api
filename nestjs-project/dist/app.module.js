"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const population_entity_1 = require("./entities/population.entity");
const government_economy_entity_1 = require("./entities/government_economy.entity");
const society_media_entity_1 = require("./entities/society_media.entity");
const environment_entity_1 = require("./entities/environment.entity");
const food_entity_1 = require("./entities/food.entity");
const water_entity_1 = require("./entities/water.entity");
const energy_entity_1 = require("./entities/energy.entity");
const health_entity_1 = require("./entities/health.entity");
const population_controller_1 = require("./controllers/population.controller");
const government_economy_controller_1 = require("./controllers/government_economy.controller");
const society_media_controller_1 = require("./controllers/society_media.controller");
const environment_controller_1 = require("./controllers/environment.controller");
const food_controller_1 = require("./controllers/food.controller");
const water_controller_1 = require("./controllers/water.controller");
const energy_controller_1 = require("./controllers/energy.controller");
const health_controller_1 = require("./controllers/health.controller");
const population_service_1 = require("./services/population.service");
const government_economy_service_1 = require("./services/government_economy.service");
const society_media_service_1 = require("./services/society_media.service");
const environment_service_1 = require("./services/environment.service");
const food_service_1 = require("./services/food.service");
const water_service_1 = require("./services/water.service");
const energy_service_1 = require("./services/energy.service");
const health_service_1 = require("./services/health.service");
const data_insertion_service_1 = require("./services/data_insertion.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'azertyuiop',
                database: 'worldometers',
                entities: [
                    population_entity_1.Population,
                    government_economy_entity_1.GovernmentEconomy,
                    society_media_entity_1.SocietyMedia,
                    environment_entity_1.Environment,
                    food_entity_1.Food,
                    water_entity_1.Water,
                    energy_entity_1.Energy,
                    health_entity_1.Health,
                ],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                population_entity_1.Population,
                government_economy_entity_1.GovernmentEconomy,
                society_media_entity_1.SocietyMedia,
                environment_entity_1.Environment,
                food_entity_1.Food,
                water_entity_1.Water,
                energy_entity_1.Energy,
                health_entity_1.Health,
            ]),
        ],
        controllers: [
            population_controller_1.PopulationController,
            government_economy_controller_1.GovernmentEconomyController,
            society_media_controller_1.SocietyMediaController,
            environment_controller_1.EnvironmentController,
            food_controller_1.FoodController,
            water_controller_1.WaterController,
            energy_controller_1.EnergyController,
            health_controller_1.HealthController,
        ],
        providers: [
            population_service_1.PopulationService,
            government_economy_service_1.GovernmentEconomyService,
            society_media_service_1.SocietyMediaService,
            environment_service_1.EnvironmentService,
            food_service_1.FoodService,
            water_service_1.WaterService,
            energy_service_1.EnergyService,
            health_service_1.HealthService,
            data_insertion_service_1.DataInsertionService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map