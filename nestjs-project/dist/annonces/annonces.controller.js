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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnoncesController = void 0;
const common_1 = require("@nestjs/common");
const annonces_service_1 = require("./annonces.service");
let AnnoncesController = class AnnoncesController {
    constructor(annoncesService) {
        this.annoncesService = annoncesService;
    }
    getAllAnnonces() {
        console.log('get all annonces');
        return this.annoncesService.getAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "getAllAnnonces", null);
AnnoncesController = __decorate([
    (0, common_1.Controller)('annonces'),
    __metadata("design:paramtypes", [annonces_service_1.AnnoncesService])
], AnnoncesController);
exports.AnnoncesController = AnnoncesController;
//# sourceMappingURL=annonces.controller.js.map