<template>
    <div class="index">
        <div class="index__card">
            <div class="index__card__form">
                <label for="input" class="index__card__label">Insira um time:</label>
                <br>
                <input 
                    type="text" 
                    placeholder="Ex: Flamengo, Corinthians..." 
                    id="input"
                    class="index__card__input"
                    v-model="team">
                <button class="index__card__button" @click="addTeam()">Adicionar</button>

                <div v-if="listTeams.teams.length >= 2">
                    <br>
                    <button class="index__card__button2" @click="generateGames()">Gerar Tabela</button>
                </div>

            </div>
            <br>
            <div>
                <ul style="margin:0; padding:0">
                    <li 
                        v-for="team in listTeams.teams" :key="team"
                        class="index__card__team"
                    >
                        <h3>{{ team }} adicionado!</h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from 'axios';
import router from '../../router/index'
import store from '../../store/index'

@Options({
    name: 'Index',
})
export default class Index extends Vue {

    listTeams: any = {
        teams: []
    };
    team: string = "";

    addTeam() {
        if(!this.listTeams.teams.includes(this.team)) {
            this.listTeams.teams.push(this.team);
            this.team = "";
        }
    }

    generateGames() {
        const url = "http://localhost:3000/api/generator";
        axios.post(url, this.listTeams)
            .then((response): void => {
                store.commit('setGames', response.data)
                store.commit('setTeams', this.listTeams.teams)
                router.push({path: '/table'})
            })
    }
}
</script>


<style lang="scss">
    @import './index.scss';
</style>