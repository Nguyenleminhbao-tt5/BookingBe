import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus } from "@nestjs/common";
import { IResponse } from "@/common/interfaces/response.interface";
import { UserDto } from "./dto/user.dto";
export declare class UserService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    getAllUsers(): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: any[];
    }>;
    createUser(newUser: UserDto): Promise<IResponse>;
    deleteUser(user_id: string): Promise<IResponse>;
    updateUser(user_id: string, editUser: UserDto): Promise<IResponse>;
    showUser(user_id: string): Promise<IResponse>;
}
