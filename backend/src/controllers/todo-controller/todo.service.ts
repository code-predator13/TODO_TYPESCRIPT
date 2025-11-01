import {Injectable, NotFoundException} from "@nestjs/common";
import {CreateTodoDto} from "./dto/create-todo.dto.js";

@Injectable()
export class TodoService {
    private readonly todo: Todo[] = [
        {
            _id: 1,
            title: 'заметка 1',
            status: true,
            dataCreate: 'new Date()'
        },
        {
            _id: 2,
            title: 'заметка 2',
            status: true,
            dataCreate: 'new Date()'
        },
        {
            _id: 3,
            title: 'заметка 3',
            status: true,
            dataCreate: 'new Date()'
        }
    ];

    create(createToDo: CreateTodoDto) {
    const newTodo: Todo = {
            _id: this.todo.length + 1,
            title: createToDo.title,
            status: createToDo.status !== undefined ? createToDo.status : false,
            dataCreate: createToDo.dataCreate || new Date().toISOString()
        }

        this.todo.push(newTodo)
        return newTodo
    }

    findAll(): Todo[] {
        return this.todo
    }

    findById(id: number): Todo {
        const todo = this.todo.find(element => element._id === id)

        if(!todo) {
            throw new NotFoundException(`не найдена заметка с id ${id}`)
        }

        return todo
    }

    toggle(id: number): Todo {
        const todo = this.todo.find(element => element._id === id)

        if(!todo) {
            throw new NotFoundException(`не найдена заметка с id ${id}`)
        }

        todo.status = !todo.status

        return todo
    }

    delete(id: number): void {
        const index = this.todo.findIndex(element => element._id === id)

        if(index === -1) {
            throw new NotFoundException(`не найдена заметка с id ${id}`)
        }

        this.todo.splice(index, 1)
    }
}

export interface Todo {
    _id: number,
    title: string,
    status: boolean,
    dataCreate: string
}