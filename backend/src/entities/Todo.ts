import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('todos')
export class Todo {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    status: string;

    @Column()
    dataCreate: Date;
}