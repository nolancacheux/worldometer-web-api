"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const annonce_entity_1 = require("../annonces/annonce.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'junia',
    entities: [annonce_entity_1.Annonce],
};
//# sourceMappingURL=typeorm.config.js.map