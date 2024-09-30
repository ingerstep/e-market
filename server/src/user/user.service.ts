import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';
import { UserResponseType } from './types/userResponse.type';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    });

    if (user) {
      throw new HttpException(
        'Email is already taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(newUser);
  }

  async loginUser(loginDto: LoginDto): Promise<UserResponseType> {
    const user = await this.usersRepository
      .createQueryBuilder('users')
      .select(['users.id', 'users.username', 'users.email', 'users.password'])
      .where('users.email = :email', { email: loginDto.email })
      .getOne();

    if (!user) {
      throw new HttpException(
        'User not found',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordValid = await compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new HttpException(
        'Incorrect password',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return this.buildUserResponse(user);
  }

  buildUserResponse(userEntity: User): UserResponseType {
    return {
      id: userEntity.id,
      username: userEntity.username,
      email: userEntity.email,
      token: this.generateJwt(userEntity),
    };
  }

  generateJwt(userEntity: User): string {
    return sign({ email: userEntity.email }, process.env.JWT_SECRET);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
