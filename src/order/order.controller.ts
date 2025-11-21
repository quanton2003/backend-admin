import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import express from 'express';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get()
  async findAll(@Res() res: express.Response) {
    const orders = await this.service.findAll();
    // React-admin yêu cầu Content-Range để phân trang
    res.setHeader(
      'Content-Range',
      `orders 0-${orders.length - 1}/${orders.length}`,
    );
    res.json(orders);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() order: Partial<Order>) {
    return this.service.create(order);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() order: Partial<Order>) {
    return this.service.update(id, order);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
