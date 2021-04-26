import { BadRequestException, PipeTransform } from "@nestjs/common";

export class GeneratorValidation implements PipeTransform {
    transform(value: any) {
        if (this.nTeamsIsNotValid(value)) {
            throw new BadRequestException("Quantidade de times tem que ser maior que 2!")
        }

        return value;
    }

    private nTeamsIsNotValid(value: any): boolean {
        const nTeams = value.teams.length;
        return nTeams < 2 ? true : false;
    }
}