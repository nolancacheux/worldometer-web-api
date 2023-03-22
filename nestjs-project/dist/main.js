"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const data_insertion_service_1 = require("./services/data_insertion.service");
async function startDataInsertion(dataInsertionService) {
    setInterval(async () => {
        await dataInsertionService.insertData();
    }, 5000);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataInsertionService = app.get(data_insertion_service_1.DataInsertionService);
    startDataInsertion(dataInsertionService);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map