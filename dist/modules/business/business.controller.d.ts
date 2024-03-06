import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { EditBusinessDto } from './dto/edit-business.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    getAllBusiness(): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: any[];
    }>;
    createBusiness(newBusiness: CreateBusinessDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    showBusiness(business_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
    updateBusiness(business_id: string, editBusiness: EditBusinessDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    deleteBusiness(business_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
}
