import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";



export class CreateBookingDto extends BaseDto{
    @IsString()
    @IsNotEmpty()
    @Expose()
    start_book: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    end_book: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    time_picker: string;

    @IsNotEmpty()
    @Expose()
    num_of_humans: number;

    @IsString()
    @IsNotEmpty()
    @Expose()
    address: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    business_id: string;

}