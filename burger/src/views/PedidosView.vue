<template>
    <main class="peidos">
        <nav class="nav">
            <a href="">Voltar</a>
            <p>Aba de pedids</p>
        </nav>


        <div class="div_lunch">
            <div class="lunch">
                <div class="div_img">
                    <img src="../assets/pedidos/pedidos_burger/x-salada.jpeg" alt="">
                </div>
                <div class="div_desc">
                    <p>X-Salada</p>
                    <ul>
                        <li id="pao_lanche">Pão de Brioche</li>
                        <li id="carne_lanche">Carne</li>
                        <li id="salada_lanche">Salada</li>
                    </ul>
                </div>
                

            </div>



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
    background-color: #dddddd95;
    backdrop-filter: blur(5px);
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
    column-gap: 20px;
}
.lunch{
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 400px;
    background-color: wheat;
    /* column-gap: 30px; */
}
.div_img {
    background-color: black;
    height: 100%;
    width: 65%;
    img{
        height: 100%;
        width: 100%;
    }
}

.div_desc {
    height: 100%;
    width: 35%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 30px;
    p {
        margin-top: 20px;
        font-size: 28px;
        background-color: #FF9900;
        color: black;
        font-weight: bolder;
        padding: 3px;
        border-radius: 10px;
    }
    ul {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: start;
        list-style: square;
    }
}
/* #pao_lanche {
    list-style: square;
} */

</style>