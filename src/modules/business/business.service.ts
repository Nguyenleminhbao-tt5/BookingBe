import { IResponse } from "@/common/interfaces/response.interface";
import { SupabaseService } from "@/database/supabase.service";
import { HttpStatus, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { EditBusinessDto } from "./dto/edit-business.dto";



@Injectable()

export class BusinessService {
    private supabase: SupabaseClient;
    constructor(private readonly supabaseService:SupabaseService){
        if(this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else console.log('connect supabase failed');
    }


    async getAllBusiness() {
        try{
            const { data, error } = await this.supabase.from('business').select()
            return {
                code: HttpStatus.OK,
                type: "Success",
                data: data
            };
        }
        catch(err)
        {
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Get all business failed"
            } as IResponse
        }
       
    }

    async createBusiness(newBusiness: CreateBusinessDto){
        try{
            const { data, error } = await this.supabase
            .from('business')
            .insert(newBusiness)
            .select();
            if(!error) return{
                code: HttpStatus.OK,
                type: 'Success',
                data: data[0]
            } as IResponse
        }
        catch(err){
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Create business failed"
            } as IResponse
        }
    }

    async deleteBusiness(business_id:string){
        try{
            const { error } = await this.supabase
            .from('business')
            .delete()
            .eq('id', business_id)
        if(!error) 
            return {
                code: HttpStatus.OK,
                type: 'Success',
                data: "Delete business successfully"
            } as IResponse
        }
        catch(err){
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Delete business failed"
            } as IResponse
        }
    }

    async updateBusiness(business_id:string, editBusiness:EditBusinessDto){
        try{
            const { data, error } = await this.supabase
            .from('business')
            .update(editBusiness)
            .eq('id', business_id)
            .select()
           
            if (!error)
                return {
                code: HttpStatus.OK,
                type: 'Success',
                data: data[0],
                } as IResponse;
        }
        catch(err){
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Update business failed"
            } as IResponse
        }
    }

    async showBusiness(business_id:string){
        try{
            const {data, error} = await this.supabase
            .from('business')
            .select('*')
            .eq('id', business_id)
            if(data) {
                return {
                    code: HttpStatus.OK,
                    type: 'Success',
                    data: data[0]
                } as IResponse
            }
            
            else {
                return {
                    code: HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: "Business not exists"
                } as IResponse
            }
        }
        catch(err){
            return {
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: "Show business failed"
            } as IResponse
        }
       
    }
}