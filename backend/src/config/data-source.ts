import { DataSource } from "typeorm";
import { User } from "../entities/User.js";
import { Todo } from "../entities/Todo.js";

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017",
    database: process.env.MONGODB_DATABASE || "todo_app",
    entities: [User, Todo],
    migrations: ["src/migrations/**/*.ts"], 
    synchronize: true, 
    logging: true,
}); 