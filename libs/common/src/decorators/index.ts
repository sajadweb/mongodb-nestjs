import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import * as DeviceDetector from 'device-detector-js';

export const IpParam = createParamDecorator<unknown, ExecutionContext>(
  async (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<any>();
    return req.ip;
  },
);

export const DeviceParam = createParamDecorator<unknown, ExecutionContext>(
  async (data: string, ctx: ExecutionContext) => {
    try {
      const req = ctx.switchToHttp().getRequest<any>();
      const userAgent = req.headers['user-agent'];
      if (!userAgent) {
        throw new NotFoundException();
      }
      const deviceDetector = new DeviceDetector();
      console.log('deviceDetector', deviceDetector);
      const device = deviceDetector.parse(userAgent);
      console.log('device', device);
      return device;
    } catch (error) {
      throw new NotFoundException(error);
    }
  },
);
