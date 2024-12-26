<template>
    <main class="peidos">
        <nav class="nav">
            <a href="">Voltar</a>
            <p>Aba de pedids</p>
        </nav>
        <div class="div_lunch">
            <div class="lunch">Lanche 1</div>
            <div class="lunch">Lanche 2</div>
        </div>
    </main>
</template>

<script>
// POSSIVEL BUG, QUANDO PÁGINA É RECARREGADA O ROUTER NAO RECARREGA E PERMANECE IGUAL

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 100%;

}
.peidos {
    margin: 0 auto;
    background-color: rgb(129, 39, 39);
    color: white;
    height: 75vh;
    width: 900px;
    display: flex;
    flex-direction: column;
    
    a {
        
    color: rgb(28, 209, 125);
    }
}

.div_lunch{
    display: flex;
    justify-content: center;
    align-items: center;
}
.lunch{
    border-right: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    background-color: wheat;
}
</style>