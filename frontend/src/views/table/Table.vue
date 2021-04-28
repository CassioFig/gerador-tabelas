<template>
    <div class="table">
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '../../store/index'

@Options({
    name: 'Table',
})
export default class Table extends Vue {
    games = store.state.games;
}
</script>