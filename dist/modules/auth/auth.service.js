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
exports.AuthService = void 0;
const supabase_service_1 = require("../../database/supabase.service");
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(supabaseService, jwtService) {
        this.supabaseService = supabaseService;
        this.jwtService = jwtService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async authentication(email, password) {
        try {
            let { data } = await this.supabase
                .from('users')
                .select()
                .eq('email', email)
                .single();
            if (!data) {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: 'User not found',
                };
            }
            else {
                let user = data;
                const checkPassword = await argon.verify(user.password, password);
                if (checkPassword) {
                    return user;
                }
                else {
                    return {
                        code: common_1.HttpStatus.BAD_REQUEST,
                        type: 'Error',
                        data: 'Please enter correctly password',
                    };
                }
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Login  failed',
            };
        }
    }
    async authenticateGoogle(user) {
        try {
            const { data: checkUser } = await this.supabase
                .from('users')
                .select('*')
                .eq('email', user.email)
                .single();
            if (checkUser) {
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: {
                        ...checkUser,
                        accessToken: await this.convertToJwtString(user.id),
                    },
                };
            }
            else {
                user = {
                    ...user,
                    password: "GOOGLE"
                };
                const { data, error } = await this.supabase
                    .from('users')
                    .insert(user)
                    .select();
                if (!error) {
                    let user = data[0];
                    user = {
                        ...user,
                        accessToken: await this.convertToJwtString(user.id),
                    };
                    delete data[0].password;
                    return {
                        code: common_1.HttpStatus.OK,
                        type: 'Success',
                        data: user,
                    };
                }
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Login google failed',
            };
        }
    }
    async login(userInfo) {
        try {
            userInfo = {
                ...userInfo,
                accessToken: await this.convertToJwtString(userInfo.id),
            };
            delete userInfo.password;
            return {
                code: common_1.HttpStatus.OK,
                type: 'Success',
                data: userInfo,
            };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Login  failed',
            };
        }
    }
    async signUp(userInfo) {
        try {
            const { data: checkUser } = await this.supabase
                .from('users')
                .select('*')
                .eq('email', userInfo.email)
                .single();
            if (checkUser) {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: 'User already Exists',
                };
            }
            else {
                const { data, error } = await this.supabase
                    .from('users')
                    .insert(userInfo)
                    .select();
                if (!error) {
                    let user = data[0];
                    user = {
                        ...user,
                        accessToken: await this.convertToJwtString(user.id),
                    };
                    delete data[0].password;
                    return {
                        code: common_1.HttpStatus.OK,
                        type: 'Success',
                        data: user,
                    };
                }
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Create user failed',
            };
        }
    }
    async logout() {
        return 'logout';
    }
    async convertToJwtString(user_id) {
        const payload = {
            user_id,
        };
        return await this.jwtService.signAsync(payload, {
            expiresIn: '1d',
            secret: `${process.env.SECRET_JWT}`,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map