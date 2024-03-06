import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import { IsEmpty, IsNumber, IsOptional, IsString } from "class-validator";



export class EditBusinessDto extends BaseDto {
   
    @IsOptional()
    @IsString()
    @Expose()
    name: string;

    @IsOptional()
    @IsNumber()
    @Expose()
    price: number;

}