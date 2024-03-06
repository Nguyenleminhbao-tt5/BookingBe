import { BaseDto } from "@/common/dto/base.dto";
import { Expose } from "class-transformer";
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateBusinessDto extends BaseDto {
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Expose()
    price: number;

}