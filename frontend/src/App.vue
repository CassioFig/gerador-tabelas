<template>
  <div id="nav">
	  <Header/>
	  <Content/>
  </div>
</template>

<script lang="ts">
import Content from "./components/template/content/Content.vue"
import Header from "./components/template/header/Header.vue"
import { Options, Vue } from "vue-class-component";

@Options({
    name: "App",
	components: { Content, Header }
})
export default class App extends Vue {
	
}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		height: 100vh;
		display: grid;
		grid-template-rows: 150px 1fr 40px;
		grid-template-areas: 
			"header"
			"content";
	}
</style>
