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
exports.EnvironmentController = void 0;
const common_1 = require("@nestjs/common");
const environment_service_1 = require("../services/environment.service");
let EnvironmentController = class EnvironmentController {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    async getEnvironmentData() {
        return this.environmentService.getLatestEnvironmentData();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnvironmentController.prototype, "getEnvironmentData", null);
EnvironmentController = __decorate([
    (0, common_1.Controller)('environment'),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], EnvironmentController);
exports.EnvironmentController = EnvironmentController;
//# sourceMappingURL=environment.controller.js.map