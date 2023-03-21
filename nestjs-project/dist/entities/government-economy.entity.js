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
exports.GovernmentEconomy = void 0;
const typeorm_1 = require("typeorm");
let GovernmentEconomy = class GovernmentEconomy {
};
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', primary: true }),
    __metadata("design:type", Date)
], GovernmentEconomy.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "global_health_spending_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "global_education_spending_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "global_military_spending_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "cars_produced_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "bicycles_produced_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GovernmentEconomy.prototype, "computers_sold_this_year", void 0);
GovernmentEconomy = __decorate([
    (0, typeorm_1.Entity)('government')
], GovernmentEconomy);
exports.GovernmentEconomy = GovernmentEconomy;
//# sourceMappingURL=government-economy.entity.js.map