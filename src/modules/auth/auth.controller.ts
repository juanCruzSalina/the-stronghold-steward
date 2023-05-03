import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, SignUpDTO } from './dto';
import { UpdateUserDto } from '../user/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() signupDTO: SignUpDTO) {
    return this.authService.create(signupDTO);
  }

  @Post()
  login(@Body() loginDTO: LoginDTO) {
    return this.authService.findOne(loginDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
}
