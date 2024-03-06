import { LoggerService } from "@/modules/logger/logger.service";
import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private readonly logger;
    private supabase;
    constructor(logger: LoggerService);
    connection(): SupabaseClient<any, "public", any>;
}
