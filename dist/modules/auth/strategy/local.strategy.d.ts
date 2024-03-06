import { AuthService } from '../auth.service';
import { IUser } from '@/modules/users/interfaces/user.interface';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<IUser>;
}
export {};
