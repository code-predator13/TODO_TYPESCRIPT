import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAllTodo(@Query('userId') userId?: string) {
    return await this.todoService.findAll(userId);
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string) {
    return await this.todoService.findById(id);
  }

  @Post()
  async createTodo(@Body() body: CreateTodoDto, @Query('userId') userId?: string) {
    return await this.todoService.create(body, userId);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() body: Partial<CreateTodoDto>) {
    return await this.todoService.update(id, body);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    await this.todoService.delete(id);
    return { message: 'Заметка успешно удалена' };
  }
}

