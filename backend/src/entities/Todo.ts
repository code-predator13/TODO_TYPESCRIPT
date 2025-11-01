import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';
import { User } from './User';

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

    @ManyToOne(() => User, user => user.todos)
    user!: User;

    @Column('objectId')
    userId!: ObjectId;
}