import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO, SignUpDTO } from './dto';
import { UpdateUserDto } from '../user/dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async create(createAuthDto: SignUpDTO) {
    const user = await this.userService.create(createAuthDto);
    return {
      access_token: await this.jwtService.signAsync(
        { sub: user.id, username: user.username, email: user.email },
        {
          secret: this.configService.get<string>('JWT_SECRET')
        }
      )
    };
  }

  findOne(loginInfo: LoginDTO) {
    return `This action returns a auth`;
  }

  update(id: string, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
