import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import {  IsBoolean, IsOptional, IsString } from "class-validator";



export class EditBookingDto extends BaseDto{
    @IsString()
    @IsOptional()
    @Expose()
    start_book: string;

    @IsString()
    @IsOptional()
    @Expose()
    end_book: string;

    @IsString()
    @IsOptional()
    @Expose()
    time_picker: string;

    @IsOptional()
    @Expose()
    num_of_humans: number;

    @IsString()
    @IsOptional()
    @Expose()
    address: string;

    @IsString()
    @IsOptional()
    @Expose()
    business_id: string;

    @IsBoolean()
    @IsOptional()
    @Expose()
    is_pending: string;

}