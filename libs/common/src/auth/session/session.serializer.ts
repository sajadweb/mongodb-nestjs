import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error | null, id?: any) => void): void {
    done(null, user);
  }

  deserializeUser(
    payload: unknown,
    done: (err: Error | null, payload?: unknown) => void,
  ): void {
    done(null, payload);
  }
}
