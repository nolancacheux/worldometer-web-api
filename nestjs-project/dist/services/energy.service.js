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
exports.EnergyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const energy_entity_1 = require("../entities/energy.entity");
let EnergyService = class EnergyService {
    constructor(energyRepository) {
        this.energyRepository = energyRepository;
    }
    async findAll() {
        return await this.energyRepository.find();
    }
    async create(energy) {
        return await this.energyRepository.save(energy);
    }
    async update(id, energy) {
        await this.energyRepository.update(id, energy);
    }
    async delete(id) {
        await this.energyRepository.delete(id);
    }
    async getLatestEnergyData() {
        const data = await this.energyRepository.find({
            order: { created_at: 'DESC' },
            take: 1,
        });
        return data[0];
    }
};
EnergyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(energy_entity_1.Energy)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnergyService);
exports.EnergyService = EnergyService;
//# sourceMappingURL=energy.service.js.map