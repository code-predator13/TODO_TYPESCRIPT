import {IsBoolean, IsOptional, IsDate, IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty({ message: 'Title не может быть пустым' })
    @MinLength(3, { message: 'Title должен быть минимум 3 символа' })
    title!: string;

    @IsBoolean()
    @IsOptional() 
    status?: boolean;

    @IsString()
    @IsOptional() 
    dataCreate?: string;
}