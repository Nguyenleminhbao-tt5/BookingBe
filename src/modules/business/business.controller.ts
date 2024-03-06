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
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { Request } from 'express';
import { EditBusinessDto } from './dto/edit-business.dto';

@UseGuards(AuthenticationGuard)
@Controller('/api/v1/business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getAllBusiness() {
    try {
      const response = await this.businessService.getAllBusiness();
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async createBusiness(
    @Body() newBusiness: CreateBusinessDto,
  ) {
    try {
      newBusiness = CreateBusinessDto.plainToClass(newBusiness);
      const response = await this.businessService.createBusiness(newBusiness);
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Get(':id')
  async showBusiness(@Param('id') business_id: string) {
    try {
      const response = await this.businessService.showBusiness(business_id);
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async updateBusiness(
    @Param('id') business_id: string,
    @Body() editBusiness: EditBusinessDto,
  ) {
    try {
      editBusiness = EditBusinessDto.plainToClass(editBusiness);
      const response = await this.businessService.updateBusiness(
        business_id,
        editBusiness,
      );
      return response;
    } catch (err) {
      throw err;
    }
  }

  @Delete(':id')
  async deleteBusiness(@Param('id') business_id: string) {
    try {
      const response = await this.businessService.deleteBusiness(business_id);
      return response;
    } catch (err) {
      throw err;
    }
  }
}
