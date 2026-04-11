import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon from 'argon2';

import { User } from './entities/user.entity';
import { CreateUserDto, LoginUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;
      // Generar el hash del password
      const hash = await argon.hash(password);
      // console.log(hash);
      const user = this.userRepository.create({ ...userData, password: hash });
      await this.userRepository.save(user);

      // delete user.password;
      // return user;
      const { password: hashed_password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true }, //! OJO!
    });

    if (!user)
      throw new UnauthorizedException('Credentials are not valid (email)');

    const validPassword = await argon.verify(user.password, password);
    if (!validPassword)
      throw new UnauthorizedException('Credentials are not valid (password)');

    // return user;
    const { password: hashed_password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  private handleDBErrors(error: any): never {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Please check server logs');
  }
}
