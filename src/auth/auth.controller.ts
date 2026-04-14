import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Headers,
  SetMetadata,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { IncomingHttpHeaders } from 'http';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { GetUser, RawHeaders } from './decorators';
import { UserRoleGuard } from './guards/user-role.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RawHeaders() rawHeaders: string[],
    @Headers() headers: IncomingHttpHeaders,
  ) {
    console.log(request.user);
    console.log(user);
    return {
      ok: true,
      message: 'Hola mundo privado',
      user,
      userEmail,
      rawHeaders,
      headers,
    };
  }

  @Get('private2')
  @UseGuards(AuthGuard(), UserRoleGuard)
  // @SetMetadata('roles', ['admin', 'super-user'])
  privateRoute2(@GetUser() user: User) {
    return {
      ok: true,
      user,
    };
  }
}
