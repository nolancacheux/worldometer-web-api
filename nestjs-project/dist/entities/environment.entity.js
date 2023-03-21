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
exports.Environment = void 0;
const typeorm_1 = require("typeorm");
let Environment = class Environment {
};
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', primary: true }),
    __metadata("design:type", Date)
], Environment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Environment.prototype, "forest_area_lost_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Environment.prototype, "arable_land_lost_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Environment.prototype, "co2_emissions_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Environment.prototype, "desertification_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Environment.prototype, "toxic_chemicals_released_this_year", void 0);
Environment = __decorate([
    (0, typeorm_1.Entity)('environment')
], Environment);
exports.Environment = Environment;
//# sourceMappingURL=environment.entity.js.map