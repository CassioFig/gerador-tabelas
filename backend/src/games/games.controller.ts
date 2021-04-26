import { Body, Controller, Post } from '@nestjs/common';
import { GeneratorDto } from './dto/create-games.dto';
import { GeneratorValidation } from './games.pipe';
import { GamesService } from './games.service';

@Controller('api/generator')
export class GamesController {
    constructor(private gamesService: GamesService) {}

    @Post()
    generateGames(@Body(GeneratorValidation) generatorDto: GeneratorDto): string {
        return this.gamesService.generateTable(generatorDto);
    }
}
