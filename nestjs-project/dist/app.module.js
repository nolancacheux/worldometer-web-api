"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'world_data',
    entities: [PopulationEntity, GovernmentEntity, SocietyEntity, EnvironmentEntity, FoodEntity, WaterEntity, EnergyEntity, HealthEntity],
    synchronize: true,
}),
;
//# sourceMappingURL=app.module.js.map