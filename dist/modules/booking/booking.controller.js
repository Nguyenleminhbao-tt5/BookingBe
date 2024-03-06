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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const booking_service_1 = require("./booking.service");
const create_booking_dto_1 = require("./dto/create-booking.dto");
const edit_booking_dto_1 = require("./dto/edit-booking.dto");
let BookingController = class BookingController {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
    }
    async getAllBooking() {
        try {
            const response = await this.bookingsService.getAllBooking();
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async createBooking(request, newBooking) {
        try {
            newBooking = create_booking_dto_1.CreateBookingDto.plainToClass(newBooking);
            const user_id = request.user;
            const response = await this.bookingsService.createBooking(user_id, newBooking);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async showBooking(booking_id) {
        try {
            const response = await this.bookingsService.showBooking(booking_id);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async updateBooking(booking_id, editBooking) {
        try {
            editBooking = edit_booking_dto_1.EditBookingDto.plainToClass(editBooking);
            const response = await this.bookingsService.updateBooking(booking_id, editBooking);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteBooking(booking_id) {
        try {
            const response = await this.bookingsService.deleteBooking(booking_id);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAllBooking", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_booking_dto_1.CreateBookingDto]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createBooking", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "showBooking", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_booking_dto_1.EditBookingDto]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "updateBooking", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteBooking", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthenticationGuard),
    (0, common_1.Controller)('/api/v1/booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map