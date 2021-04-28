<template>
    <div class="table">
        <Ranking/>
        <Games />
        <button class="btn__print" @click="print()">Imprimir Página</button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Ranking, Games } from '../../components/tables'
import store from '../../store/index'

@Options({
    name: 'Table',
    components: { Ranking, Games }
})
export default class Table extends Vue {
    games:any = store.state.games;

    print() {
        window.print()
    }
}
</script>

<style lang="scss">
    @import './table.scss';
</style>