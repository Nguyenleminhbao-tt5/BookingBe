import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { EditBookingDto } from './dto/edit-booking.dto';
import { Request } from "express";
export declare class BookingController {
    private readonly bookingsService;
    constructor(bookingsService: BookingService);
    getAllBooking(): Promise<import("../../common/interfaces/response.interface").IResponse | {
        code: import("@nestjs/common").HttpStatus;
        type: string;
        data: any[];
    }>;
    createBooking(request: Request, newBooking: CreateBookingDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    showBooking(booking_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
    updateBooking(booking_id: string, editBooking: EditBookingDto): Promise<import("../../common/interfaces/response.interface").IResponse>;
    deleteBooking(booking_id: string): Promise<import("../../common/interfaces/response.interface").IResponse>;
}
