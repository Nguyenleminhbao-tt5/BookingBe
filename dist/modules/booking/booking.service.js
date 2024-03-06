"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const supabase_service_1 = require("../../database/supabase.service");
const common_1 = require("@nestjs/common");
let BookingService = class BookingService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
        if (this.supabaseService) {
            this.supabase = supabaseService.connection();
        }
        else
            console.log('connect supabase failed');
    }
    async getAllBooking() {
        try {
            const { data, error } = await this.supabase.from('bookings').select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`);
            return {
                code: common_1.HttpStatus.OK,
                type: 'Success',
                data: data,
            };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Get all Booking failed',
            };
        }
    }
    async createBooking(user_id, newBooking) {
        try {
            const { data, error } = await this.supabase
                .from('bookings')
                .insert({ ...newBooking, user_id })
                .select();
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0],
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Create Booking failed',
            };
        }
    }
    async deleteBooking(booking_id) {
        try {
            const { error } = await this.supabase
                .from('bookings')
                .delete()
                .eq('id', booking_id);
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: 'Delete Booking successfully',
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Delete Booking failed',
            };
        }
    }
    async updateBooking(booking_id, editBooking) {
        try {
            const { data, error } = await this.supabase
                .from('bookings')
                .update(editBooking)
                .eq('id', booking_id)
                .select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`);
            if (!error)
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0],
                };
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Update Booking failed',
            };
        }
    }
    async showBooking(booking_id) {
        try {
            const { data, error } = await this.supabase
                .from('bookings')
                .select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`)
                .eq('id', booking_id);
            if (data) {
                return {
                    code: common_1.HttpStatus.OK,
                    type: 'Success',
                    data: data[0],
                };
            }
            else {
                return {
                    code: common_1.HttpStatus.BAD_REQUEST,
                    type: 'Error',
                    data: 'Booking not exists',
                };
            }
        }
        catch (err) {
            return {
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                type: 'Error',
                data: 'Show Booking failed',
            };
        }
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], BookingService);
//# sourceMappingURL=booking.service.js.map