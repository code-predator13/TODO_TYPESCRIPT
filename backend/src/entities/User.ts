import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';
import { Todo } from './Todo';

@Entity('users')
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[];
}