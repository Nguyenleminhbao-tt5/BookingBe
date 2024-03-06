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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const business_service_1 = require("./business.service");
const create_business_dto_1 = require("./dto/create-business.dto");
const edit_business_dto_1 = require("./dto/edit-business.dto");
let BusinessController = class BusinessController {
    constructor(businessService) {
        this.businessService = businessService;
    }
    async getAllBusiness() {
        try {
            const response = await this.businessService.getAllBusiness();
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async createBusiness(newBusiness) {
        try {
            newBusiness = create_business_dto_1.CreateBusinessDto.plainToClass(newBusiness);
            const response = await this.businessService.createBusiness(newBusiness);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async showBusiness(business_id) {
        try {
            const response = await this.businessService.showBusiness(business_id);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async updateBusiness(business_id, editBusiness) {
        try {
            editBusiness = edit_business_dto_1.EditBusinessDto.plainToClass(editBusiness);
            const response = await this.businessService.updateBusiness(business_id, editBusiness);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteBusiness(business_id) {
        try {
            const response = await this.businessService.deleteBusiness(business_id);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
};
exports.BusinessController = BusinessController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "getAllBusiness", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "createBusiness", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "showBusiness", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_business_dto_1.EditBusinessDto]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateBusiness", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "deleteBusiness", null);
exports.BusinessController = BusinessController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, common_1.Controller)('/api/v1/business'),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
//# sourceMappingURL=business.controller.js.map