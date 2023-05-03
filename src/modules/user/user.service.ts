import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/schema/user.schema';
import { CreateUserDto, UpdateUserDto } from './dto';
import { hashPass } from 'src/utils/pass-hashing';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const checkIfExist = await this.userModel
      .findOne({
        $or: [
          { username: createUserDto.username },
          { email: createUserDto.email }
        ]
      })
      .exec();
    if (checkIfExist) {
      throw new HttpException(
        `There's already an user with that Username/Email`,
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPass = await hashPass(createUserDto.password);
    const createdUser = await new this.userModel({
      ...createUserDto,
      password: hashedPass
    }).save();

    return await this.userModel.findById(createdUser._id);
  }

  findOne(id: string) {
    return `This action returns a ${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a ${id} user`;
  }

  remove(id: string) {
    return `This action removes a ${id} user`;
  }
}
