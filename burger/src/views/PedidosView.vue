<template>
    <main class="peidos">
        <nav class="nav">
            <a href="">Voltar</a>
            <p>Aba de pedids</p>
        </nav>


        <div class="div_Main_lunch">

            <div class="div_Sec_lunch">
                <!--Terá 2 DIVs, a da IMG e da DESCRICAO -->

                <!--DIV da IMG -->
                <div class="div_img">
                    <img class="imgFromLunch" src="../../src/assets/pedidos/pedidos_burger/assetsViews/x-salada.jpeg" alt="">
                </div>

                <!--DIV da CRESCRICAO -->
                <div class="div_desc">
                    <p>X-Salada</p>
                    <ul>
                        <li id="pao_lanche">Pão de Brioche</li>
                        <li id="carne_lanche">Carne</li>
                        <li id="salada_lanche">Salada</li>
                    </ul>
                </div>
                

            </div>



            <div id="post-container-final">
                <!-- v-for="burger in AllBurgers" :key="burger.id" -->
                <!-- <p>Lanche 2</p> -->
            </div>
        </div>
    </main>
</template>

<script>
// POSSIVEL BUG, QUANDO PÁGINA É RECARREGADA O ROUTER NAO RECARREGA E PERMANECE IGUAL
export default {
    data(){
        return {
        //  img_src2: "./assetsViews/x-salada.jpeg"
        img_src_final: null,
        id_final: null,
        nome_final: null,
        pao_final: null,
        carne_final: null

        }
    },
    methods: {
    async cuz(){
        const req_final = await fetch("http://localhost:3000/burgers")
        const data = await req_final.json()

        this.carne_final = data.All_Burgers
        console.log(this.carne_final)
    

        //identifica o container para criar os elementos
        const div2lunch = document.getElementById('post-container-final')
        
        
        //criando os elementos de DIV e P ---- 1 DIV
        const divContainerImg = document.createElement('div')
        const img_brg = document.createElement('img')
        
        //criando os elementos de DIV e P ---- 2 DIV
        const divContainerDesc = document.createElement('div')
        const p = document.createElement('p')
        p.innerText = 'DIV teste final'
        const ul = document.createElement('ul')
        const li = document.createElement('li')

        //cuidando da IMG
        // img.setAttribute('class', 'imgFromLunch')
        img_brg.src = 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg'
        // img_brg.style.height = '100%'
        // img_brg.style.width = '100%'

        //colocando classes 'LUNCH' padrao nas DIVs criadas
        div2lunch.className = 'div_Sec_lunch'
        divContainerImg.className = 'div_img'
        divContainerImg.appendChild(img_brg)
        divContainerDesc.className = 'div_desc'

        //Colocando texto no P e colocando o P dentro da DIV
        divContainerDesc.appendChild(p)
        ul.appendChild(li)
        divContainerDesc.appendChild(ul)

        //colocando a DIV criada dentro da DIV principal
        div2lunch.appendChild(divContainerImg)
        div2lunch.appendChild(divContainerDesc)

    
    //   const postContainer = document.getElementById('post-container-final')

    //   const divteste = document.createElement('div')
    //   const p = document.createElement('p')
    //   const img = document.createElement('img')

    //   divteste.setAttribute('class','divtst')
    //   img.src = 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg'
    //   // img.style.height = '10px'

    //   p.innerText = 'DIV TETSE'
      
    //   divteste.appendChild(img)
    //   divteste.appendChild(p)

    //   postContainer.appendChild(divteste)

    }
    },
    mounted() {
    this.cuz()
}
}

</script>

<style scoped>
/* 
:root {
    --bg: url("./assetsViews/x-salada.jpeg")
} */
.divtst {
  background-color: green;
  height: 220px;
  width: 250px;
  display: flex;
  img{
    height: 100%;
    width: 70%;
  }

}


*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
.divtst2{
    /* background-image: var(--bg); */
  background-color: rgb(113, 234, 15);
  height: 220px;
  width: 110px;

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

/* #pao_lanche {
    list-style: square;
} */

</style>