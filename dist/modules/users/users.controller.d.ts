import { UserService } from "./users.service";
import { UserDto } from "./dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: any[];
    }>;
    createUser(newUser: UserDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    showUser(user_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
    updateUser(user_id: string, editUser: UserDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    deleteUser(user_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
}
