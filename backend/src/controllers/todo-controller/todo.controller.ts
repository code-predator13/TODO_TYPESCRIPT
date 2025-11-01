import {Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete} from "@nestjs/common";
import {TodoService} from "./todo.service.js";
import {CreateTodoDto} from "./dto/create-todo.dto.js";

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {}

    @Get()
    getAllToDo() {
        return this.todoService.findAll()
    }

    @Get(':id')
    getToDoById(@Param('id', ParseIntPipe) id: number) {
        return this.todoService.findById(+id)
    }

    @Post()
    createToDo(@Body() body: CreateTodoDto) {
        return this.todoService.create(body)
    }

    @Patch(':id/toggle')
    toggleToDo(@Param('id', ParseIntPipe) id: number) {
        return this.todoService.toggle(id)
    }

    @Delete(':id')
    deleteToDo(@Param('id', ParseIntPipe) id: number) {
        return this.todoService.delete(id)
    }

}

