import { Injectable } from '@nestjs/common';
import { Generator } from './Generator';
import { GeneratorDto } from './dto/create-games.dto';

@Injectable()
export class GamesService {

    generateTable(generatorDto: GeneratorDto): string {
        const generator = new Generator(generatorDto);
        generator.generate()
        
        return generator.championship;
    }
}
