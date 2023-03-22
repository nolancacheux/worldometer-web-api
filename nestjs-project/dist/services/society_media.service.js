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
exports.SocietyMediaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const society_media_entity_1 = require("../entities/society_media.entity");
let SocietyMediaService = class SocietyMediaService {
    constructor(societyMediaRepository) {
        this.societyMediaRepository = societyMediaRepository;
    }
    async findAll() {
        return await this.societyMediaRepository.find();
    }
    async create(societyMedia) {
        return await this.societyMediaRepository.save(societyMedia);
    }
    async update(id, societyMedia) {
        await this.societyMediaRepository.update(id, societyMedia);
    }
    async delete(id) {
        await this.societyMediaRepository.delete(id);
    }
    async getLatestSocietyMediaData() {
        const data = await this.societyMediaRepository.find({
            order: { created_at: 'DESC' },
            take: 1,
        });
        return data[0];
    }
};
SocietyMediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(society_media_entity_1.SocietyMedia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocietyMediaService);
exports.SocietyMediaService = SocietyMediaService;
//# sourceMappingURL=society_media.service.js.map