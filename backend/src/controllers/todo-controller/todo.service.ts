import { Injectable, NotFoundException } from "@nestjs/common";
import { AppDataSource } from "../../config/data-source";
import { Todo } from "../../entities/Todo";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class TodoService {
  async create(createTodoDto: CreateTodoDto, userId?: string): Promise<Todo> {
    const todoRepository = AppDataSource.getMongoRepository(Todo);
    
    const todo = todoRepository.create({
      title: createTodoDto.title,
      status: createTodoDto.status || 'active',
      dataCreate: new Date(),
      userId: userId ? new ObjectId(userId) : undefined,
    });

    return await todoRepository.save(todo);
  }

  async findAll(userId?: string): Promise<Todo[]> {
    const todoRepository = AppDataSource.getMongoRepository(Todo);
    
    if (userId) {
      return await todoRepository.findBy({ userId: new ObjectId(userId) });
    }
    
    return await todoRepository.find();
  }

  async findById(id: string): Promise<Todo> {
    const todoRepository = AppDataSource.getMongoRepository(Todo);
    
    const todo = await todoRepository.findOneBy({ _id: new ObjectId(id) });

    if (!todo) {
      throw new NotFoundException(`Не найдена заметка с id ${id}`);
    }

    return todo;
  }

  async update(id: string, updateData: Partial<CreateTodoDto>): Promise<Todo> {
    const todoRepository = AppDataSource.getMongoRepository(Todo);
    
    const todo = await this.findById(id);
    
    Object.assign(todo, updateData);
    
    return await todoRepository.save(todo);
  }

  async delete(id: string): Promise<void> {
    const todoRepository = AppDataSource.getMongoRepository(Todo);
    
    const todo = await this.findById(id);
    
    await todoRepository.remove(todo);
  }
}

