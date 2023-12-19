import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Person {
    
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsString()
    lastName: string
}

