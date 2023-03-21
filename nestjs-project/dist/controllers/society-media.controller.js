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
exports.SocietyMediaController = void 0;
const common_1 = require("@nestjs/common");
const society_media_service_1 = require("../services/society-media.service");
let SocietyMediaController = class SocietyMediaController {
    constructor(societyMediaService) {
        this.societyMediaService = societyMediaService;
    }
    async getSocietyMediaData() {
        return this.societyMediaService.getLatestSocietyMediaData();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocietyMediaController.prototype, "getSocietyMediaData", null);
SocietyMediaController = __decorate([
    (0, common_1.Controller)('society-media'),
    __metadata("design:paramtypes", [society_media_service_1.SocietyMediaService])
], SocietyMediaController);
exports.SocietyMediaController = SocietyMediaController;
//# sourceMappingURL=society-media.controller.js.map