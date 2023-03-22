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
exports.SocietyMedia = void 0;
const typeorm_1 = require("typeorm");
let SocietyMedia = class SocietyMedia {
};
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', primary: true }),
    __metadata("design:type", Date)
], SocietyMedia.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "new_books_published_this_year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "newspaper_copies_printed_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "tvs_sold_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "mobile_phones_sold_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "video_games_spending_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "internet_users_in_the_world", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "emails_sent_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "blog_posts_written_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "tweets_sent_today", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SocietyMedia.prototype, "google_searches_today", void 0);
SocietyMedia = __decorate([
    (0, typeorm_1.Entity)('society_media')
], SocietyMedia);
exports.SocietyMedia = SocietyMedia;
//# sourceMappingURL=society_media.entity.js.map