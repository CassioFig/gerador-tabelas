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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	body {
		margin: 0;
		padding: 0;
	}

	#app {
		background-color: #039b9b;
		height: 100vh;
		display: grid;
		grid-template-rows: 150px 1fr;
		grid-template-columns: 1fr;
		grid-template-areas: 
			"header"
			"content"
	}

	::-webkit-scrollbar {
        width: 7px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background:#ffff;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #039b9b;
				
		border-radius: 15px;
    }
</style>
