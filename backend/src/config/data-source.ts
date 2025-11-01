import { DataSource } from "typeorm";

import {User} from "../entities/user.entity";
import { Todo } from "../entities/todo.entity";
eeport const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Todo],
    synchronize: true,
});