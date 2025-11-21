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
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll(@Res() res: express.Response) {
    const users = await this.service.findAll();
    // React-admin yêu cầu Content-Range: <resource> <start>-<end>/<total>
    res.setHeader(
      'Content-Range',
      `users 0-${users.length - 1}/${users.length}`,
    );
    res.json(users);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() user: Partial<User>) {
    return this.service.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>) {
    return this.service.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
