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
exports.BusinessService = void 0;
const supabase_service_1 = require("../../database/supabase.service");
const common_1 = require("@nestjs/common");
let BusinessService = class BusinessService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async getAllBusiness() {
        try {
            const { data, error } = await this.supabase.from('business').select();
            return {
                code: common_1.HttpStatus.OK,
                type: "Success",
                data: data
            };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Get all business failed"
            };
        }
    }
    async createBusiness(newBusiness) {
        try {
            const { data, error } = await this.supabase
                .from('business')
                .insert(newBusiness)
                .select();
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0]
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Create business failed"
            };
        }
    }
    async deleteBusiness(business_id) {
        try {
            const { error } = await this.supabase
                .from('business')
                .delete()
                .eq('id', business_id);
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: "Delete business successfully"
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Delete business failed"
            };
        }
    }
    async updateBusiness(business_id, editBusiness) {
        try {
            const { data, error } = await this.supabase
                .from('business')
                .update(editBusiness)
                .eq('id', business_id)
                .select();
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0],
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Update business failed"
            };
        }
    }
    async showBusiness(business_id) {
        try {
            const { data, error } = await this.supabase
                .from('business')
                .select('*')
                .eq('id', business_id);
            if (data) {
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0]
                };
            }
            else {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: "Business not exists"
                };
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Show business failed"
            };
        }
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], BusinessService);
//# sourceMappingURL=business.service.js.map