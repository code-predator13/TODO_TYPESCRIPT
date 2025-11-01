import { Module } from '@nestjs/common';
import { TodoController } from "./controllers/todo-controller/todo.controller";
import { TodoService } from "./controllers/todo-controller/todo.service";
import { UserController } from "./controllers/user-controller/user.controller";
import { UserService } from "./controllers/user-controller/user.service";

@Module({
  imports: [],
  controllers: [TodoController, UserController],
  providers: [TodoService, UserService],
})
export class AppModule {}
