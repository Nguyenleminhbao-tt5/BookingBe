import { SupabaseModule } from "@/database/supabase.module";
import { Module } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";






@Module({
    imports: [SupabaseModule],
    controllers:[BookingController],
    providers:[BookingService]
})

export class BookingModule {}