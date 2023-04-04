export class CreateUserDto {
  // @ApiProperty({ required: false, example: 'sajjad' })
  name: string;
  // @ApiProperty({ example: 'sajadweb7@gmail.com' })
  email: string;
  // @ApiProperty({ example: 'sajjad' })
  username: string;
  // @ApiProperty({ example: 'sajjad' })
  password: string;
  device: any;
}

export class LoginUserDto {
  // @ApiProperty({ example: 'sajadweb9@gmail.com' })
  email: string;
  // @ApiProperty({ example: 'sajjad' })
  password: string;
}
