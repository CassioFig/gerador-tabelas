<template>
    <div class="ranking">
        <table>
            <thead>
               <th>Time</th> 
               <th>Pontos</th> 
               <th>Vitórias</th> 
               <th>Empates</th> 
               <th>Derrotas</th> 
               <th>Gols Marcados</th> 
               <th>Gols Sofridos</th> 
            </thead>
            <tbody>
                <tr v-for="team in teams" :key="team">
                    <td>{{team}}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '../../store/index'

@Options({
    name: 'Ranking',
})
export default class Ranking extends Vue {
    teams: number[] = store.state.teams;
}
</script>

<style lang="scss" scoped>
    @import './ranking.scss';
</style>