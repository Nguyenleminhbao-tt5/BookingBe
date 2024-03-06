import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from '../auth/guard/auth.guard';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { EditBookingDto } from './dto/edit-booking.dto';
import {Request} from "express"

@UseGuards(AuthenticationGuard)
@Controller('/api/v1/booking')
export class BookingController {
  constructor(private readonly bookingsService: BookingService) {}

  @Get()
  async getAllBooking() {
    try {
      const response = await this.bookingsService.getAllBooking();
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async createBooking(@Req() request: Request,@Body() newBooking: CreateBookingDto) {
    try {
      newBooking = CreateBookingDto.plainToClass(newBooking);
      const user_id = request.user as string;
      const response = await this.bookingsService.createBooking(user_id,newBooking);
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Get(':id')
  async showBooking(@Param('id') booking_id: string) {
    try {
      const response = await this.bookingsService.showBooking(booking_id);
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async updateBooking(
    @Param('id') booking_id: string,
    @Body() editBooking: EditBookingDto,
  ) {
    try {
      editBooking = EditBookingDto.plainToClass(editBooking);
      const response = await this.bookingsService.updateBooking(
        booking_id,
        editBooking,
      );
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Delete(':id')
  async deleteBooking(@Param('id') booking_id: string) {
    try {
      const response = await this.bookingsService.deleteBooking(booking_id);
      return response;
    } catch (err) {
      throw err;
    }
  }
}
