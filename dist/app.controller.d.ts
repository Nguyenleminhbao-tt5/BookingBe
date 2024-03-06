import { HttpStatus } from "@nestjs/common";
export declare class AppControler {
    getHello(): Promise<{
        code: HttpStatus;
        type: string;
        data: string;
    }>;
}
