import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { GetCouponDto } from './dto/get-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@ApiTags('coupon')
@Controller('coupon')
export class CouponController {
  constructor(private couponService: CouponService) {}
  @Get()
  getCoupon(@Query() queryCoupon: GetCouponDto) {
    return this.couponService.getCouponData(queryCoupon);
  }

  @Get('/:id')
  getCouponById(@Param('id', ParseIntPipe) id: number) {
    return this.couponService.getCouponByIdData(id);
  }

  @Post()
  createCoupon(@Body() createCoupon: CreateCouponDto) {
    return this.couponService.createCouponData(createCoupon);
  }

  @Put('/:id')
  updateCoupon(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCoupon: UpdateCouponDto,
  ) {
    return this.couponService.updateCouponData(id, updateCoupon);
  }

  @Put('/delete/:id')
  deleteCoupon(@Param('id', ParseIntPipe) id: number) {
    return this.couponService.deleteCoupon(id);
  }

  @Put('/un-delete/:id')
  unDeleteCoupon(@Param('id', ParseIntPipe) id: number) {
    return this.couponService.unDeleteCoupon(id);
  }
}
