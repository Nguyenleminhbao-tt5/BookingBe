import { IResponse } from '@/common/interfaces/response.interface';
import { SupabaseService } from '@/database/supabase.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateBookingDto } from './dto/create-booking.dto';
import { EditBookingDto } from './dto/edit-booking.dto';

@Injectable()
export class BookingService {
  private supabase: SupabaseClient;
  constructor(private readonly supabaseService: SupabaseService) {
    if (this.supabaseService) {
      this.supabase = supabaseService.connection();
    } else console.log('connect supabase failed');
  }

  async getAllBooking() {
    try {
      const { data, error } = await this.supabase.from('bookings').select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`);
      return {
        code: HttpStatus.OK,
        type: 'Success',
        data: data,
      };
    } catch (err) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        type: 'Error',
        data: 'Get all Booking failed',
      } as IResponse;
    }
  }

  async createBooking(user_id: string, newBooking: CreateBookingDto) {
    try {
      const { data, error } = await this.supabase
        .from('bookings')
        .insert({ ...newBooking, user_id })
        .select();
      if (!error)
        return {
          code: HttpStatus.OK,
          type: 'Success',
          data: data[0],
        } as IResponse;
    } catch (err) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        type: 'Error',
        data: 'Create Booking failed',
      } as IResponse;
    }
  }

  async deleteBooking(booking_id: string) {
    try {
      const { error } = await this.supabase
        .from('bookings')
        .delete()
        .eq('id', booking_id);
      if (!error)
        return {
          code: HttpStatus.OK,
          type: 'Success',
          data: 'Delete Booking successfully',
        } as IResponse;
    } catch (err) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        type: 'Error',
        data: 'Delete Booking failed',
      } as IResponse;
    }
  }

  async updateBooking(booking_id: string, editBooking: EditBookingDto) {
    try {
      const { data, error } = await this.supabase
        .from('bookings')
        .update(editBooking)
        .eq('id', booking_id)
        .select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`);

      if (!error)
        return {
          code: HttpStatus.OK,
          type: 'Success',
          data: data[0],
        } as IResponse;
    } catch (err) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        type: 'Error',
        data: 'Update Booking failed',
      } as IResponse;
    }
  }

  async showBooking(booking_id: string) {
    try {
      const { data, error } = await this.supabase
        .from('bookings')
        .select(`*, business: business_id(name,price), user: user_id(first_name, last_name)`)
        .eq('id', booking_id);
      if (data) {
        return {
          code: HttpStatus.OK,
          type: 'Success',
          data: data[0],
        } as IResponse;
      } else {
        return {
          code: HttpStatus.BAD_REQUEST,
          type: 'Error',
          data: 'Booking not exists',
        } as IResponse;
      }
    } catch (err) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        type: 'Error',
        data: 'Show Booking failed',
      } as IResponse;
    }
  }
}
