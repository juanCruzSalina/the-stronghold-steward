import {
  IsString,
  IsAlphanumeric,
  IsEmail,
  MaxLength,
  MinLength
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsAlphanumeric()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
