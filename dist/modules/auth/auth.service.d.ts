import { SupabaseService } from '@/database/supabase.service';
import { HttpStatus } from '@nestjs/common';
import { IResponse } from '@/common/interfaces/response.interface';
import { AuthDto } from './dto';
import { IUser } from '../users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly supabaseService;
    private readonly jwtService;
    private supabase;
    constructor(supabaseService: SupabaseService, jwtService: JwtService);
    authentication(email: string, password: string): Promise<IUser | IResponse | {
        code: HttpStatus;
        type: string;
        data: string;
    }>;
    authenticateGoogle(user: any): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: any;
    }>;
    login(userInfo: IUser | any): Promise<any>;
    signUp(userInfo: AuthDto): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: string;
    }>;
    logout(): Promise<string>;
    convertToJwtString(user_id: string): Promise<string>;
}
