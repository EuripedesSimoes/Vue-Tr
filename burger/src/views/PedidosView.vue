<template>
    <main class="peidosView">
        <nav class="nav">
            <a href="">Voltar</a>
            <p>Aba de pedids</p>
            <img class="imgFromLunch" style="display: none;" src="../../src/assets/pedidos/pedidos_burger/assetsViews/x-salada.jpeg" alt="">
            <img class="imgFromLunch" style="display: none;" src="../../src/assets/pedidos/pedidos_burger/assetsViews/x-burger.jpg" alt="">
            <img class="imgFromLunch" style="display: none;" src="../../src/assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt="">
        </nav>


        <div class="div_Main_lunch" id="post-containerr" >
            <!-- v-for="burgerss in All_Burgers" :key="burgerss.id" -->

            <div class="div_Sec_lunch" style="margin: 10px;">
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
// import { forEach } from 'core-js/core/array';

// POSSIVEL BUG, QUANDO PÁGINA É RECARREGADA O ROUTER NAO RECARREGA E PERMANECE IGUAL
export default {
    data(){
        return {
        //  img_src2: "./assetsViews/x-salada.jpeg"
        // img_src_SS: null,
        // id_SS: null,
        // nome_SS: null,
        // pao_SS: null,
        // carne_SS: null,
        burger_SS: null,
        burger_CS: null

        // img_src_final: null,
        // id_final: null,
        // nome_final: null,
        // pao_final: null,
        // carne_final: null

        }
    },
    methods: {
    async cuz(){
        const req_final = await fetch("http://localhost:3000/burgers")
        const data = await req_final.json()

    //         const paes = data.paes;
        this.burger_SS = data.All_Burgers
        console.log(this.burger_SS)
    //         paes.forEach(pao => {
    //             const div = document.createElement('div');
    //             div.textContent = `ID: ${pao.id}, Tipo: ${pao.tipo}`;
    //             document.body.appendChild(div);
    //         });
        this.burger_SS.forEach((burgin_SS) => { 
            // alert( burgin_SS.img_src)

        //identifica o container para criar os elementos
        const divMainlunch = document.getElementById('post-containerr')
        // const div_pcf = document.createElement('div')

        //cria a div que carregará a IMG e a DESC
        const div2lunch = document.createElement('div')
        
        //criando os elementos de DIV e P ---- 1 DIV
        const divContainerImg = document.createElement('div')
        const img_brg = document.createElement('img')
        
        //criando os elementos de DIV e P ---- 2 DIV
        const divContainerDesc = document.createElement('div')
        const p_brg = document.createElement('p')
        // p_brg.innerText = 'DIV tetse final'
        p_brg.innerText = burgin_SS.nome
        const ul_brg = document.createElement('ul')
        const li_brg_pao = document.createElement('li')
        const li_brg_carne = document.createElement('li')
        const li_brg_extra = document.createElement('li')

        //colocando innerText nos LIs
        li_brg_pao.innerText = `Pão: ${burgin_SS.pao}`
        // li_brg_pao.innerText = 'Pão: ' + burgin_SS.pao
        li_brg_carne.innerText = `Carne: ${burgin_SS.carne}`
        if (burgin_SS.extra === ''){
            ul_brg.style.listStyle = 'none'
        }
        else{
        li_brg_extra.innerText = `Extra: ${burgin_SS.extra}`
    }
        //cuidando da IMG
        // img.setAttribute('class', 'imgFromLunch')
            img_brg.src = burgin_SS.img_src  
    // "../assets/pedidos/pedidos_burger/x-salada.jpeg"

        // img_brg.src = 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg'

        //colocando classes 'LUNCH' padrao nas DIVs criadas
        div2lunch.className = 'div_Sec_lunch'
        divContainerImg.className = 'div_img'
        divContainerImg.appendChild(img_brg)
        divContainerDesc.className = 'div_desc'

        //Colocando texto no P e colocando o P dentro da DIV
        divContainerDesc.appendChild(p_brg)
        ul_brg.appendChild(li_brg_pao)
        ul_brg.appendChild(li_brg_carne)
        ul_brg.appendChild(li_brg_extra)
        divContainerDesc.appendChild(ul_brg)

        //colocando a DIV criada dentro da DIV principal
        div2lunch.appendChild(divContainerImg)
        div2lunch.appendChild(divContainerDesc)

        divMainlunch.appendChild(div2lunch)
        
    })
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
.peidosView {
    margin: 0 auto;
    background-color: #dddddd95;
    backdrop-filter: blur(5px);
    color: white;
    height: 75vh;
    /* width: 900px; */
    /* flex: 1 1 300px; */
    max-width: 900px;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; MAIN Lunch estiver abaixo de 900px*/
    
    a {
        
    color: rgb(28, 209, 125);
    }
}

.div_Main_lunch{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* column-gap: 35px; */
    
    /* AS divs de dentro pulam de linha (wrap) se não couberem na WIDTH atual */
    flex-wrap: wrap;
    /* max-width: 900px; */
    height: auto;
    background-color: rgba(255, 217, 0, 0.623);
}


/* #pao_lanche {
    list-style: square;
} */

</style>


