import { SupabaseService } from '@/database/supabase.service';
export declare class PaymentService {
    private readonly supabaseService;
    private supabase;
    constructor(supabaseService: SupabaseService);
    paymentWithMomo(amount: number): Promise<void>;
}
