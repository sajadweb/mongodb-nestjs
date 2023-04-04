## config microservices in TCP

`npm install @nestjs/microservices` 2. Transport

```ts
export declare enum Transport {
  TCP = 0,
  REDIS = 1,
  NATS = 2,
  MQTT = 3,
  GRPC = 4,
  RMQ = 5,
  KAFKA = 6,
}
```

3. libs/src/config/user.config.ts

```ts
import { Transport } from '@nestjs/microservices';
export const UserMicroConfig = () => {
  return {
    transport: Transport.TCP,
    options: {
      port: parseInt(process.env.USER_MICRO),
    },
  };
};
```

3. main

```ts
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.TCP,
  options: {
    host: '0.0.0.0',
    port,
  },
});
```

4. controller

```ts
@MessagePattern('login')
login(@Payload() createUserDto: LoginUserDto) {
  return this.userService.login(createUserDto.email, createUserDto.password);
}
```
5. use from proxy
```ts
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserProxyService',
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(UserMicroConfig());
      },
    },
  ],
})
export class UserModule {}
```
6. use from  UserProxyService
```ts

@Injectable()
export class UserService {
  constructor(@Inject('UserProxyService') private client: ClientProxy) {}
  async pingCheck() {
    try {
      await this.client.connect();
      return 'ok';
    } catch (error) {
      return 'Error';
    }
  }
}

```
## REDIS
1. env
```env
POST_MICRO=6700
USER_MICRO=6701
REST_MICRO=6703
POST_REDIS_URL=redis://localhost:6379
```
2. config
```ts
import { Transport } from '@nestjs/microservices';
export const PostMicroConfig = () => {
  return {
    transport: Transport.REDIS,
    options: {
     url: process.env.POST_REDIS_URL,
    },
  };
};
```