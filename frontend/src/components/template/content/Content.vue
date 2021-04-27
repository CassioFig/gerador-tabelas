<template>
    <div class="content">
        <router-view></router-view>
        __
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "Content",
})
export default class Content extends Vue {
	
}
</script>

<style lang="scss">

    .content {
        grid-area: content;
        background-color: blue;
        padding: 20px;
    }

</style>