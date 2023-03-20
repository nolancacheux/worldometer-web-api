"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnoncesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const annonce_entity_1 = require("./annonce.entity");
const annonces_controller_1 = require("./annonces.controller");
const annonces_service_1 = require("./annonces.service");
let AnnoncesModule = class AnnoncesModule {
};
AnnoncesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([annonce_entity_1.Annonce])],
        controllers: [annonces_controller_1.AnnoncesController],
        providers: [annonces_service_1.AnnoncesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], AnnoncesModule);
exports.AnnoncesModule = AnnoncesModule;
//# sourceMappingURL=annonces.module.js.map