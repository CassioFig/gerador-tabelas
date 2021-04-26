import { IsOptional } from "class-validator";

export class GeneratorDto {
    teams: any[]
    
    @IsOptional()
    secondTurn?: boolean;

    @IsOptional()
    mix?: boolean;
}