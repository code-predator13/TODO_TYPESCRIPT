import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';

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
  user!: any;

  @Column('objectId')
  userId!: ObjectId;
}
