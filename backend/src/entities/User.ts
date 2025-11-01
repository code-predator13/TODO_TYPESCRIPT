import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';

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
    todos!: any[];
}