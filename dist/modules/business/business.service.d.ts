import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus } from "@nestjs/common";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { EditBusinessDto } from "./dto/edit-business.dto";
export declare class BusinessService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    getAllBusiness(): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: any[];
    }>;
    createBusiness(newBusiness: CreateBusinessDto): Promise<IResponse>;
    deleteBusiness(business_id: string): Promise<IResponse>;
    updateBusiness(business_id: string, editBusiness: EditBusinessDto): Promise<IResponse>;
    showBusiness(business_id: string): Promise<IResponse>;
}
