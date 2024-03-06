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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../../database/supabase.service");
const common_2 = require("@nestjs/common");
let UserService = class UserService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async getAllUsers() {
        try {
            const { data, error } = await this.supabase.from('users').select();
            return {
                code: common_2.HttpStatus.OK,
                type: "Success",
                data: data
            };
        }
        catch (err) {
            return {
                code: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Get all users failed"
            };
        }
    }
    async createUser(newUser) {
        try {
            const { data, error } = await this.supabase
                .from('users')
                .insert(newUser);
            if (!error)
                return {
                    code: common_2.HttpStatus.OK,
                    type: 'Success',
                    data: 'Create user successfully'
                };
        }
        catch (err) {
            return {
                code: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Create user failed"
            };
        }
    }
    async deleteUser(user_id) {
        try {
            const { error } = await this.supabase
                .from('users')
                .delete()
                .eq('id', user_id);
            if (!error)
                return {
                    code: common_2.HttpStatus.OK,
                    type: 'Success',
                    data: "Delete user successfully"
                };
        }
        catch (err) {
            return {
                code: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Delete user failed"
            };
        }
    }
    async updateUser(user_id, editUser) {
        try {
            const { error } = await this.supabase
                .from('users')
                .update(editUser)
                .eq('id', user_id);
            if (!error)
                return {
                    code: common_2.HttpStatus.OK,
                    type: 'Success',
                    data: "Update user successfully"
                };
        }
        catch (err) {
            return {
                code: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Update user failed"
            };
        }
    }
    async showUser(user_id) {
        try {
            const { data, error } = await this.supabase
                .from('users')
                .select('*')
                .eq('id', user_id)
                .single();
            delete data.password;
            if (data) {
                return {
                    code: common_2.HttpStatus.OK,
                    type: 'Success',
                    data: data
                };
            }
            else {
                return {
                    code: common_2.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: "User not exists"
                };
            }
        }
        catch (err) {
            return {
                code: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Show user failed"
            };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], UserService);
//# sourceMappingURL=users.service.js.map