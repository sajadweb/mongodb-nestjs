import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, GustGuard } from '../guards';
export function IsLogin() {
  return applyDecorators(UseGuards(AuthenticatedGuard));
}
export function IsGust() {
  return applyDecorators(UseGuards(GustGuard));
}
