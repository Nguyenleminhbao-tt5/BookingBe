import { SupabaseModule } from "@/database/supabase.module";
import { Module } from "@nestjs/common";
import { BusinessController } from "./business.controller";
import { BusinessService } from "./business.service";





@Module({
    imports: [SupabaseModule],
    controllers:[BusinessController],
    providers: [BusinessService],
})

export class BusinessModule{}