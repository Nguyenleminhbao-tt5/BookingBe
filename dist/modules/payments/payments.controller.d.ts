import { PaymentService } from "./payments.service";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    paymentWithMomo(): Promise<void>;
}
