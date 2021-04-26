import { GeneratorDto } from "./dto/create-games.dto";

export class Generator {
    private teams: any[];
    private teamsA: string[];
    private teamsB: string[];
    private secondTurn: any = false;
    private mix: any = false;
    private _championship: any = {
        "round": []
    }

    constructor(generatorDto: GeneratorDto) {
        this.teams = generatorDto.teams;
        this.secondTurn = generatorDto.secondTurn;
        this.mix = generatorDto.mix;
    }
    
    public generate() {
        this.splitTeams()
        this.generateRounds()
        this.generateGames()
        this.removeFalse()

        if(this.mix) this.shuffleGames()   
    }

    public get championship() {
        return this._championship;
    }

    private splitTeams(): void {
        if (this.mix) this.shuffle(this.teams);
        
        let length = this.teams.length;
        let half = length / 2;

        if (length % 2 == 0) {
            this.teamsA = this.teams.slice(0, half);
            this.teamsB = this.teams.slice(half, length);
            this.teamsB.reverse();

        } else {
            this.teams.push(false);
            this.splitTeams();
        }
    } 

    private shuffle(array: number[]): number[] {
        let m = array.length, t: number, i: number;

        while(m) {
            i = Math.floor(Math.random() * m--);
            
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    private generateRounds(): void {
        let length = this.teams.length;

        if (this.secondTurn) {
            length = (length - 1) * 2;

        } else {
            length = length - 1
        }

        for (let index = 0; index < length; index++) {
            this._championship["round"][index] = {"game": []};
        }
    }

    private generateGames(): void {
        for (let round = 0; round < this._championship["round"].length; round++) {

            for (let game = 0; game < (this.teams.length / 2); game++) {

                if (round < (this.teams.length - 1)) {

                    this._championship["round"][round]["game"][game] = [
                        this.teamsA[game], this.teamsB[game]
                    ]

                } else {
                    this._championship["round"][round]["game"][game] = [
                        this.teamsB[game], this.teamsA[game]
                    ]
                }
            }

            this.arrangeTeams()
        }
    }

    private arrangeTeams(): void {
        this.teamsA.splice(1, 0, this.teamsB[0]);
        this.teamsB.shift();

        this.teamsB.push(this.teamsA[this.teamsA.length - 1])
        this.teamsA.pop()
    }

    private shuffleGames(): void {
        let length = this._championship["round"].length;

        for (let index = 0; index < length; index++) {
            this.shuffle(this._championship["round"][index]["game"]);
        };
    }

    private removeFalse() {
        if (this.teams.includes(false)) {
            for (let round = 0; round < this._championship.round.length; round++) {
                for (let game = 0; game < this._championship.round[round].game.length; game++) {
                    let matche = this._championship.round[round].game[game];

                    if (matche.includes(false)) {
                        this._championship.round[round].game.splice(game, 1);
                    }
                    
                }
                
            }
        }
    }



}