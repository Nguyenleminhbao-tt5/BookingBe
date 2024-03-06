import { BaseDto } from "@/common/dto/base.dto";
export declare class CreateBookingDto extends BaseDto {
    start_book: string;
    end_book: string;
    time_picker: string;
    num_of_humans: number;
    address: string;
    business_id: string;
}
