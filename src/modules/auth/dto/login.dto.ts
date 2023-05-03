import {
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength
} from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1
  })
  @MaxLength(32)
  password: string;
}
