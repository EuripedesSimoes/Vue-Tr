<template>
    <main class="peidosView">
        <button v-for="burginn in burger_SS" v-bind:key="burginn.id" > aaaaaaa
            {{ burginn.name }}
        </button>
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
                <!-- <UserCarrinho></UserCarrinho> -->

            </div>



            <div id="post-container-final">
                <!-- v-for="burger in AllBurgers" :key="burger.id" -->
                <!-- <p>Lanche 2</p> -->
            </div>
        </div>
    </main>
</template>

<script>
// import UserCarrinho from './UserCarrinho.vue'
// import { forEach } from 'core-js/core/array';

// POSSIVEL BUG, QUANDO PÁGINA É RECARREGADA O ROUTER NAO RECARREGA E PERMANECE IGUAL
export default {
    data(){
        return {
        // burger_SS: null,
        // burger_CS: null
        }
    },
    components: {
        // UserCarrinho
    }
    ,
    methods: {
    submitarStorage(){
        // alert('cu')

        // const testeUl = document.getElementById('ul_brg').innerHTML
        const testeUl = document.querySelector('.inpSub').value
        const testeLi = document.querySelectorAll('li').value
        // const allUl = document.querySelectorAll('ul')
        // alert(allUl)
        // for(let i = 1; i < 4; i++){
        localStorage.setItem('random'+1, testeUl)
        localStorage.setItem('random'+2, testeLi)

        // }
        // const dataaa = sessionStorage.getItem("testeUl")

        alert('Pedido enviado')

        
    },

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
            function cu(){
        console.log(data[1])

    }
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


        //criando os botões de diminuir e adicionar a quantidade de lanches
        const div_preco_btn = document.createElement('div')
        div_preco_btn.className = 'div_preco_btn'
        const btn_teste = document.createElement('button')
        btn_teste.innerText = 'teste'
        btn_teste.addEventListener('click', cu)

        //DIV PREÇO
        const div_preco = document.createElement('div')
        const h1_preco = document.createElement('h1')
        h1_preco.innerText = `R$ ${burgin_SS.preço}`

        div_preco.appendChild(h1_preco)
        div_preco.className = 'div_preco'

        //DIV BOTÕES
        const div_btn = document.createElement('div')
        const btn_brg_minus = document.createElement('button')
        let p_quanty = document.createElement('p')
        // p_quanty.innerText =1
        // p_quanty.type = 'number'
        const btn_brg_add = document.createElement('button')
        const inputSubmit = document.createElement('input')

        
        p_quanty.innerText = "0"
        btn_brg_minus.innerText = '-'
        btn_brg_add.innerText = '+'
        inputSubmit.type = 'submit'
        inputSubmit.className = 'inpSub'
        inputSubmit.value = 'Enviar Pedido'
        inputSubmit.addEventListener('click', this.submitarStorage)

        // divContainerDesc.appendChild([btn_brg_minus, p_quanty, btn_brg_add])
        div_btn.appendChild(btn_brg_minus)
        div_btn.appendChild(p_quanty)
        div_btn.appendChild(btn_brg_add)
        div_btn.className = 'div_btn'

        div_preco_btn.appendChild(div_preco)
        div_preco_btn.appendChild(div_btn)
        div_preco_btn.appendChild(btn_teste)

        divContainerDesc.appendChild(div_preco_btn)

        //colocando a DIV criada dentro da DIV principal
        div2lunch.appendChild(divContainerImg)
        div2lunch.appendChild(divContainerDesc)


        divMainlunch.appendChild(inputSubmit)
        divMainlunch.appendChild(div2lunch)

        function more(){
            // alert(p_quanty.innerText)

            //pega o texto dentro do P_QUANTY e transforma em numero
            let valorAtual = Number(p_quanty.innerText)
            //ao clicar, recebe um novo valor que é a soma do numero (ex-string) + 1
            let novoValor = valorAtual + 1
            //novo texto dentro de P_QUANTY é esse novo valor
            p_quanty.innerText = novoValor
            
            // p_quanty.innerText = p_quanty.innerText + 1
            // if (p_quanty === 10) {
            //     stop
            // }
        }
        
        function min(){
        let valorAtual = Number(p_quanty.innerText)
        let novoValor = valorAtual - 1
            if(novoValor > 0){
                // se o novo valor for maior que 0, continue diminuindo
            p_quanty.innerText = novoValor
            }
            else if (novoValor <= 0){
                // se o novo valor for igual ou menor que 0, novo valor = 0
                novoValor = 0
                p_quanty.innerText = novoValor
            }
        }
        btn_brg_add.addEventListener('click', more)
        btn_brg_minus.addEventListener('click', min)
        
        // const bodyy = document.body.style.backgroundColor = 'black'
        // const bodyy = document.querySelector('main')
        // bodyy.style.backgroundColor = "red"
        const black = document.createElement('div')
        black.className = 'black'
        // black.style.width = '99%'
        // black.style.height = '99%'
        // black.style.backgroundColor = 'black'
        divMainlunch.appendChild(black)
        
    //     const bodyyy = document.querySelector('body')
        
    //   bodyyy.style.backgroundBlendMode = 'overlay'
    //   bodyyy.style.backgroundColor = 'blue'
    })
    }
    },
    mounted() {

        this.cuz()
}
}
    // const testeUl = document.getElementById('ul_brg').innerHTML
    // sessionStorage.setItem('')
    // const dataaa = sessionStorage.getItem("testeUl")

    // alert('testeUl')

</script>

<style scoped>
.black {
    background-color: black;
    /* position: absolute; */
    width: 1920px;
    height: 1080px;
}
/* 
:root {
    --bg: url("./assetsViews/x-salada.jpeg")
} */

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
@media screen and (min-width:900px) {
    .peidosView {
        width: 900px;
    }
}

@media screen and (max-width:899px) {
    .peidosView {
        max-width: 700px;
    }
}
@media screen and (max-width:499px) {
    .peidosView {
        max-width: 350px;
    }
}



.peidosView {
    margin: 0 auto;
    background-color: #dddddd95;
    backdrop-filter: blur(5px);
    color: white;
    height: auto;
    /* flex: 1 1 300px; MUDA NADA*/
    /* width: 900px; PRECISA SER MAX-WIDTH PARA OCORRER O WRAP */
    /* max-width: 900px; */
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
    /* behavior: "smooth"; */
    /* max-width: 900px; NÃO FUNCIONA, TEM  QUE SER NO PEIDOSVIEW*/
    height: auto;
    /* background-color: rgba(255, 217, 0, 0.623); */
}

/* #pao_lanche {
    list-style: square;
} */

</style>


