import { Injectable, NotFoundException } from "@nestjs/common";
import { AppDataSource } from "../../config/data-source";
import { User } from "../../entities/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userRepository = AppDataSource.getMongoRepository(User);
    
    const user = userRepository.create({
      login: createUserDto.login,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    return await userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const userRepository = AppDataSource.getMongoRepository(User);
    return await userRepository.find();
  }

  async findById(id: string): Promise<User> {
    const userRepository = AppDataSource.getMongoRepository(User);
    
    const user = await userRepository.findOneBy({ _id: new ObjectId(id) });

    if (!user) {
      throw new NotFoundException(`Не найден пользователь с id ${id}`);
    }

    return user;
  }

  async update(id: string, updateData: Partial<CreateUserDto>): Promise<User> {
    const userRepository = AppDataSource.getMongoRepository(User);
    
    const user = await this.findById(id);
    
    Object.assign(user, updateData);
    
    return await userRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    const userRepository = AppDataSource.getMongoRepository(User);
    
    const user = await this.findById(id);
    
    await userRepository.remove(user);
  }
}

