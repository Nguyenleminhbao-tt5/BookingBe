import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  AuthModule,
  LoggerModule,
  UsersModule,
  PaymentModule,
  BusinessModule,
  BookingModule
} from './modules';
import { AppControler } from './app.controller';


@Module({
  imports: [
    LoggerModule,
    UsersModule,
    AuthModule,
    PaymentModule,
    BusinessModule,
    BookingModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppControler],
  providers: [],
})
export class AppModule { }
