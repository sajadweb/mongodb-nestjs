import { Global, Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session/session.serializer';
@Global()
@Module({
  imports: [PassportModule],
  providers: [SessionSerializer],
})
export class AuthModule {}
