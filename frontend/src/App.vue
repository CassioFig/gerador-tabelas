<template>
  <div id="nav">
	  <Header/>
	  <Content/>
	  
  </div>
</template>

<script lang="ts">
import { Content, Header } from "./components/template"
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

	#app {
		background-color: #039b9b;
		height: 100vh;
		display: grid;
		grid-template-areas: 
			"header" 
			"content" ;
		grid-template-rows: 150px 1fr;
		grid-template-columns: 1fr;
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
