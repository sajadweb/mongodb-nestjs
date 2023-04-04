import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { DeviceParam } from '@libs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/ping')
  async pingCheck() {
    return await this.userService.pingCheck();
  }
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  @Post()
  @HttpCode(200)
  create(@DeviceParam() device: string, @Body() createUserDto: CreateUserDto) {
    return this.userService.create({ ...createUserDto, device });
  }
}
