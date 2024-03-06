import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Request } from 'express';
import { IUser } from '../users/interfaces/user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: Request): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: IUser;
    }>;
    googleAuth(request: Request): Promise<void>;
    googleAuthRedirect(request: Request): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: any;
    }>;
    signUp(userInfo: AuthDto): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: string;
    }>;
    logout(): Promise<string>;
}
