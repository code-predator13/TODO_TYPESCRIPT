import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';
import type { Todo } from './Todo.js';

@Entity('users')
export class User {
    @ObjectIdColumn()
    _id!: ObjectId;

    @Column()
    login!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany('Todo', 'user')
    todos!: Todo[];
}