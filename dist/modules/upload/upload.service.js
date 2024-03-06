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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
let UploadService = class UploadService {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: 'dslnmqvlb',
            api_key: `${process.env.CLOUDINARY_API_KEY}`,
            api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
        });
    }
    async uploadImages(fileList) {
        try {
            const images = fileList.map((file) => file.thumbUrl);
            let uploadImages = [];
            for (let image of images) {
                const result = await cloudinary_1.v2.uploader.upload(image);
                console.log(result);
                console.log('result', {
                    url: result.secure_url,
                    photo_id: result.public_id,
                });
                uploadImages.push({
                    url: result.secure_url,
                    photo_id: result.public_id,
                });
            }
            return uploadImages;
        }
        catch (err) {
            return {
                type: 'Error',
                code: common_1.HttpStatus.BAD_REQUEST,
                data: 'Uploading images failed',
            };
        }
    }
    async removeImages(listPhotoId) {
        try {
            listPhotoId.forEach(async (photo_id) => {
                await cloudinary_1.v2.uploader.destroy(photo_id);
            });
        }
        catch (err) {
            return {
                type: 'Error',
                code: common_1.HttpStatus.BAD_REQUEST,
                data: 'Remove images failed'
            };
        }
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadService);
//# sourceMappingURL=upload.service.js.map