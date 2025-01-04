<template>
    <main class="peidos">
        <nav class="nav">
            <a href="">Voltar</a>
            <p>Aba de pedids</p>
        </nav>


        <div class="div_Main_lunch" id="post-containerr" >
            <!-- v-for="burgerss in All_Burgers" :key="burgerss.id" -->

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

        this.burger_SS = data.All_Burgers
        console.log(this.burger_SS)
    

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
        const p = document.createElement('p')
        p.innerText = 'DIV tetse final'
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

        divMainlunch.appendChild(div2lunch)
        

    
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
        async function calabreso(){
            const req_calabreso = await fetch("http://localhost:3000/burgers")
            const data_calabreso = await req_calabreso.json()

            let burger_array = null

            burger_array = data_calabreso.All_Burgers
            console.log(burger_array.push())
            burger_array.forEach((_, i)=>{
            let ind = i
            console.log(ind)
            // this.cuz()*ind
            // for (let i = 0; i < 5; i++){
            //     this.cuz()
            // }
            while (ind === true){
                console.log('cu')
            }
        })
        }

        
        calabreso(this.cuz())
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

<!-- // URL do banco de dados JSON
const url = 'https://exemplo.com/banco-de-dados.json';

// Função para fazer a requisição fetch e processar os dados
async function fetchAndCreateDivs() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const paes = data.paes;

        // Percorre os itens do array e cria uma div para cada id
        paes.forEach(pao => {
            const div = document.createElement('div');
            div.textContent = `ID: ${pao.id}, Tipo: ${pao.tipo}`;
            document.body.appendChild(div);
        });

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

// Chama a função para executar a requisição e criação das divs
fetchAndCreateDivs(); -->

