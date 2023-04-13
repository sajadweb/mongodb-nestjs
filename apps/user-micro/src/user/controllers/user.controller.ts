import { UserPattern } from '@libs/common';
import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, LoginUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserPattern.LOGIN)
  login(@Payload() createUserDto: LoginUserDto) {
    return this.userService.login(createUserDto.email, createUserDto.password);
  }

  @MessagePattern(UserPattern.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create({ ...createUserDto });
  }

  @MessagePattern(UserPattern.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserPattern.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern(UserPattern.UPDATE)
  update(@Payload('id') id: string, @Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @MessagePattern(UserPattern.UPDATE)
  remove(@Payload('id') id: string) {
    return this.userService.remove(id);
  }
}
