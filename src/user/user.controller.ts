import { Controller , Post , Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/puran/schemas/users.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }
    @Post('create')
  async createUser(@Body() body: {name:string, email: string; password: string }): Promise<User> {
    const { email, password ,name } = body;
    const createdUser = await this.userService.createUser(name , email, password);
    return createdUser;
  }

  @Post('login')
  async loginUser(@Body() body: {email: string; password: string }){
    const {email , password} = body;
    const login = await this.userService.login(email  , password);

    return login
  }
}
