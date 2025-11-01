import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: Partial<CreateUserDto>) {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.delete(id);
    return { message: 'Пользователь успешно удален' };
  }
}

