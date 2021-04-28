<template>
    <div class="content">
        <router-view></router-view>
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
    body {
        margin: 0;
        padding: 0;
    }

    .content {
        background-color: #039b9b;
        grid-area: content;
    }

</style>