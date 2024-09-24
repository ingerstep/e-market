import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService)

    @Post('users')
    async createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<any> {
        const user = await this.userService.createUser(createUserDto)
        return 'createUser'
    }
}
