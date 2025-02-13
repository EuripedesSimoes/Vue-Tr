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

        

        // const imgSRC2 = divSEC.querySelector('img')
        // CERTO const imgSession = document.querySelectorAll('img')

        /*
        let listImgSession = []
        imgSession.forEach( imgs => {
            listImgSession.push(imgs.src)
        })
        sessionStorage.setItem('listImgs', JSON.stringify(listImgSession))
        */

        // const itensLista = Array.from(divSEC.querySelectorAll('ul li')).map(item => item.textContent);

        /*const infoDiv = {
        imgSRC2
        itensLista
      }*/


        // Armazena as informações no sessionStorage
       /* sessionStorage.setItem('infoDiv', JSON.stringify(infoDiv));
      
        console.log('Informações salvas:', infoDiv)
*/
        // const testeUl = document.getElementById('ul_brg').innerHTML
    

        // Vez do SRC das IMGS
    /*const imgSession = document.querySelectorAll('img')

    let listImgSession = []
    imgSession.forEach( imgs => {
        listImgSession.push(imgs.src)
    })
    sessionStorage.setItem('listImgs', JSON.stringify(listImgSession))

        // const secLunch = document.querySelectorAll('.div_Sec_lunch')

        // sessionStorage.clear()

        alert('Pedido enviado')*/
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
    //         function cu(){
    //     console.log(data[1]
            
    //     )

    // }
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

        //DIV BOTÕES retirado temporariamente

    // const div_btn = document.createElement('div')
    // const btn_brg_minus = document.createElement('button')
    // let p_quanty = document.createElement('p')
    // const btn_brg_add = document.createElement('button')
    
    
    // p_quanty.innerText = "0"
    // btn_brg_minus.innerText = '-'
    // btn_brg_add.innerText = '+'

    const inputSubmit = document.createElement('input')

        inputSubmit.type = 'submit'
        inputSubmit.className = 'inpSub'
        inputSubmit.value = 'Enviar Pedido'


        // Seleciona todos os botões com a classe 
        const botoesSalvar = document.querySelectorAll('.inpSub')

        // Adiciona um evento de clique a cada botão
    botoesSalvar.forEach( (botao) => {
        // botao.addEventListener('click', this.submitarStorage)
        botao.addEventListener('click', () => {
            // const div_desc = this.parentElement
            const div_sec = botao.parentElement

            const nome_lanche = div_sec.querySelector('p').innerText
            // const nome_lanchestring =  JSON.stringify(nome_lanche)
            // alert(nome_lanchestring)

            // Função para adicionar um valor à chave 'id' na sessionStorage

            // Selecionar todos os elementos <li> dentro da <ul>
            const AllItems = div_sec.querySelectorAll('ul li')

            // Criar um array para armazenar as informações
            let listData = []

            // Iterar sobre os elementos <li> e extraia as informações
            // Para cada item nos LIs, fazer um push() para o array criado
            AllItems.forEach(item => {
            listData.push(item.innerText);

            //Armazenar as informações no sessionStorage
            //sessionStorage.setItem('listData', JSON.stringify(listData)) // Assim vira ARRAY
            //sessionStorage.setItem('listData', String(listData))  Assim mostra só as letras
            


            if(nome_lanche === 'X-Salada') {
                sessionStorage.setItem('lanche1', JSON.stringify(nome_lanche))
                sessionStorage.setItem('listItems1', JSON.stringify(listData))
                // listSubId.push(sessionStorage.setItem('Id'))
            }else if(nome_lanche === 'X-Burger'){
                sessionStorage.setItem('lanche2', JSON.stringify(nome_lanche))
                sessionStorage.setItem('listItems2', JSON.stringify(listData))
                // listSubId.push(sessionStorage.setItem('Id'))
            } 
            else if(nome_lanche === 'X-Bacon'){
                sessionStorage.setItem('lanche3', JSON.stringify(nome_lanche))
                sessionStorage.setItem('listItems3', JSON.stringify(listData))
                // listSubId.push(sessionStorage.setItem('Id'))
            }

        })


            function addToSessionStorage(key, value) {
                
                // Obtém o array atual da sessionStorage
                let values = JSON.parse(sessionStorage.getItem(key)) || [];
                // Adiciona o novo valor ao array
                if(!values.includes(value)){
                    values.push(value)
                }
                // Armazena o array atualizado de volta na sessionStorage
                sessionStorage.setItem(key, JSON.stringify(values));

           

    //         const testeUl = document.querySelector('.inpSub').value
    // sessionStorage.setItem('random'+1, testeUl)

     

            }

            // Adiciona os valores 'a' e 'b' à chave 'id'
            addToSessionStorage('Id', nome_lanche);
            // addToSessionStorage('Id', 'b');
            

        // Iterar sobre os elementos <li> e extraia as informações
        // Para cada item nos LIs, fazer um push() para o array criado
        
        // sessionStorage.clear()
        }
    
    )
        })
        // inputSubmit.addEventListener('click', this.submitarStorage)

        /*divContainerDesc.appendChild(div_preco_btn)*/
        divContainerDesc.appendChild(inputSubmit)

        //colocando a DIV criada dentro da DIV principal
        div2lunch.appendChild(divContainerImg)
        div2lunch.appendChild(divContainerDesc)


        // divMainlunch.appendChild(inputSubmit)
        divMainlunch.appendChild(div2lunch)

       
        
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


