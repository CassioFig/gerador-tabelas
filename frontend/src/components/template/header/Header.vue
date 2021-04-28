<template>
    <header class="header">
         <router-link to="/"><h1 class="title">GERADOR DE TABELAS DE JOGOS</h1></router-link>
         <a href="https://github.com/CassioFig/gerador-tabelas"><img class="img" src="../../../assets/github.svg"></a>
    </header>
</template>

<style lang="scss">

    .header {
        grid-area: header;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

    }

    .title {
        color: #ffffff;
        font-family: 'Reem Kufi', sans-serif;
    }

    .img {
        width: 60px;
        margin-left: 20px;
        margin-bottom: 10px;

    }

    a {
        text-decoration: none;
    }
</style>