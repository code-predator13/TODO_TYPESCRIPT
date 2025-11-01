import { Module } from '@nestjs/common';
import {TodoController} from "./controllers/todo-controller/todo.controller.js";
import {TodoService} from "./controllers/todo-controller/todo.service.js";

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
