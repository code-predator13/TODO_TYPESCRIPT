import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty({ message: 'Title не может быть пустым' })
    @MinLength(3, { message: 'Title должен быть минимум 3 символа' })
    title!: string;

    @IsString()
    @IsNotEmpty({ message: 'text не может быть пустым' })
    text!: string;

    @IsString()
    dataCreate!: string;
}