import { IpParam, DeviceParam } from '@libs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, LoginUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('login')
  login(@Payload() createUserDto: LoginUserDto) {
    return this.userService.login(createUserDto.email, createUserDto.password);
  }

  @MessagePattern('create')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create({ ...createUserDto });
  }

  @MessagePattern('find.all')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('find.one')
  findOne(@Payload('id') id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern('update')
  update(@Payload('id') id: string, @Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @MessagePattern('delete')
  remove(@Payload('id') id: string) {
    return this.userService.remove(id);
  }
}
