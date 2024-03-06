import { IResponse } from '@/common/interfaces/response.interface';
import { SupabaseService } from '@/database/supabase.service';
import { HttpStatus } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { EditBookingDto } from './dto/edit-booking.dto';
export declare class BookingService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    getAllBooking(): Promise<IResponse | {
        code: HttpStatus;
        type: string;
        data: any[];
    }>;
    createBooking(user_id: string, newBooking: CreateBookingDto): Promise<IResponse>;
    deleteBooking(booking_id: string): Promise<IResponse>;
    updateBooking(booking_id: string, editBooking: EditBookingDto): Promise<IResponse>;
    showBooking(booking_id: string): Promise<IResponse>;
}
