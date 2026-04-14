import { Reflector } from '@nestjs/core';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('UserRoleGuard');
    // throw new BadRequestException('UserRole Exception');

    const validRoles: string[] = this.reflector.get(
      'roles',
      context.getHandler(),
    );
    console.log(validRoles);
    return false;
  }
}
