<template>
    <div class="games">
        <table v-for="round in rounds" :key="round">
            <thead>
                <tr>
                    <th colspan="3"><h3>Rodada {{round + 1}}</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in games[round]" :key="game">
                    <td>{{ game[0] }}</td>
                    <td>x</td>
                    <td>{{ game[1] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "../../store"

@Options({
    name: 'Games',
})
export default class Games extends Vue {
    gamesList: any = store.state.games;
    rounds: any[] = []
    games: any[] = []

    mounted(): void {
        for (let round = 0; round < this.gamesList['round'].length; round++) {
            this.rounds.push(round);
            this.games.push(this.gamesList['round'][round]['game']);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './games.scss';
</style>