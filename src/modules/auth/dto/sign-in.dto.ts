import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';
import { signInErrorMessages } from 'src/lib/errorMessages';

export class SignUpDTO {
  @IsNotEmpty({ message: signInErrorMessages.USERNAME_MISSING })
  @MinLength(5, { message: signInErrorMessages.USERNAME_TOO_SHORT })
  @MaxLength(10, { message: signInErrorMessages.USERNAME_TOO_LONG })
  @IsString()
  username: string;

  @IsNotEmpty({ message: signInErrorMessages.EMAIL_MISSING })
  @IsEmail({}, { message: signInErrorMessages.EMAIL_INVALID })
  email: string;

  @IsNotEmpty({ message: signInErrorMessages.PASSWORD_MISSING })
  @MinLength(8, { message: signInErrorMessages.PASSWORD_TOO_SHORT })
  @MaxLength(32, { message: signInErrorMessages.PASSWORD_TOO_LONG })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: signInErrorMessages.PASSWORD_TOO_WEAK
  })
  @IsString()
  password: string;

  @IsString({ message: signInErrorMessages.REPEAT_PASSWORD_MISSING })
  @MinLength(8, { message: signInErrorMessages.REPEAT_PASSWORD_TOO_SHORT })
  @MaxLength(32, { message: signInErrorMessages.REPEAT_PASSWORD_TOO_LONG })
  rPassword: string;
}
