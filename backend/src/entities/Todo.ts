import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';
import type { User } from './User.js';

@Entity('todos')
export class Todo {
    @ObjectIdColumn()
    _id!: ObjectId;

    @Column()
    title!: string;

    @Column()
    status!: string;

    @Column()
    dataCreate!: Date;

    @ManyToOne('User', 'todos')
    user!: User;

    @Column('objectId')
    userId!: ObjectId;
}