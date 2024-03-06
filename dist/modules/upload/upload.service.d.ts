import { IResponse } from '@/common/interfaces/response.interface';
import { UploadFile } from 'antd';
import { IImageUpload } from '@/common/interfaces/imageUpload.interface';
export declare class UploadService {
    constructor();
    uploadImages(fileList: UploadFile[]): Promise<IResponse | IImageUpload[]>;
    removeImages(listPhotoId: string[]): Promise<IResponse>;
}
