<template>
    <!-- <pre>{{ cart }}</pre> -->
    
<div class="div_main">
    
        <main class="main_pen">
            <div class="pe">
                <!-- <img src="../assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt=""> -->
                <img src="" alt="" id="img_sanduba">
                <p id="sanduba">Sandubão</p>
                <ul id="ul_sanduba"></ul>
                <!-- <p>{{ PV_descontruct }} </p> -->
            </div>
    
            <!-- <p id="localP">a</p> -->
    
        </main>

        <div class="aside">
            <div>
                <p class="lanche_preco">Lanche: $<span class="lanche_span">23</span></p>

                <p class="entrega_preco">Entrega: $<span class="entrega_span">10</span></p>
            </div>
            <div>
                <h2 class="total_preco">Total: $<span class="total_span">33,50</span></h2>
                <button type="submit" class="final_compra">Finalizar</button>
            </div>
        </div>
</div>

</template>

<script>
// import { forEach } from 'core-js/core/array';
// import CuDashBoard from '../components/CuDashBoard.vue'
// import PedidosView from './PedidosView.vue';
// import { useCart } from '@/assets/composables/useCart';

// const cart = useCart()

export default{
    // name: 'userCarrinho',
    data () {
        return {
            // cart: useCart(),
            // PV_descontruct: this.PedidosView

        }
    },
    methods: {
        localTeste(){
        
        const mainPen = document.querySelector('.main_pen')
        const pe = document.querySelector('.pe')
         // Para recuperar os dados do sessionStorage
        // let storedListData = JSON.parse(sessionStorage.getItem('listData'))
        // storedListData = sessionStorage.getItem('listData')
        // p_sherman.innerText = storedListData[1]
                
        let mainId = JSON.parse(sessionStorage.getItem('Id'))
        let arra = [mainId]

        arra.forEach( subId => {
            for(let ix=0;ix<3;ix++){
            
            if(subId[ix] !== undefined){
                // alert(subId[ix])
            
            const div = document.createElement('div')
            const ps = document.createElement('p')
            const img_sandu = document.createElement('img')
            div.className = 'divd'

            const ul = document.createElement('ul')
            const li_pao = document.createElement('li')
            const li_carne = document.createElement('li')
            const li_extra = document.createElement('li')
            
            //criando os botões de diminuir e adicionar a quantidade de lanches

            const div_preco_btn = document.createElement('div')
            div_preco_btn.className = 'div_preco_btn'
            //DIV PREÇO + <H1>
            const div_preco = document.createElement('div')
            const h1_preco = document.createElement('h1')
            const span_preco = document.createElement('span')
            h1_preco.innerText = `R$ `
            span_preco.innerText = '20'
            // h1_preco.innerText = `R$ ${burgin_SS.preço}`

            //DIV do - e +
            // const btn_teste = document.createElement('button')
            // btn_teste.innerText = 'teste'
            // btn_teste.addEventListener('click', ()=>{
            //     alert('Testando')
            // })
            const div_btn = document.createElement('div')
            div_btn.className = 'div_btn'
            const btn_brg_minus = document.createElement('button')
            let p_quanty = document.createElement('p')
            const btn_brg_add = document.createElement('button')
            
            
            btn_brg_minus.innerText = '-'
            p_quanty.innerText = "0"
            btn_brg_add.innerText = '+'
            div_btn.appendChild(btn_brg_minus)
            div_btn.appendChild(p_quanty)
            div_btn.appendChild(btn_brg_add)

            h1_preco.appendChild(span_preco)
            div_preco.appendChild(h1_preco)
            div_preco.appendChild(div_btn)
            // div_preco.appendChild(btn_teste)
            div_preco.className = 'div_preco'
            div_preco_btn.appendChild(div_preco)
            
            // alert(subId)

            // FUNÇÕES MORE E MIN
            btn_brg_add.addEventListener('click', () => {

            //pega o texto dentro do P_QUANTY e transforma em numero
            let valorAtual = Number(p_quanty.innerText)
            //ao clicar, recebe um novo valor que é a soma do numero (ex-string) + 1
            let novoValor = valorAtual + 1
            //novo texto dentro de P_QUANTY é esse novo valor
            p_quanty.innerText = novoValor
            
        })
            btn_brg_minus.addEventListener('click', () => {
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
                    alert('Desejas zerar????')
                }
            })

            
            let storedListData1 = JSON.parse(sessionStorage.getItem('listItems1'))
            let storedListData2 = JSON.parse(sessionStorage.getItem('listItems2'))
            let storedListData3 = JSON.parse(sessionStorage.getItem('listItems3'))
            ps.innerText = subId[ix]
            
            if (ps.innerText === 'X-Salada'){
                // storedListData = sessionStorage.getItem('listData')
                img_sandu.src = "/img/x-salada.18032e04.jpeg"
                li_pao.innerText = storedListData1[0]
                li_carne.innerText = storedListData1[1]
                li_extra.innerText = storedListData1[2]
            }
            else if(ps.innerText === 'X-Burger'){
                img_sandu.src = "/img/x-burger.7b5b3440.jpg"
                li_pao.innerText = storedListData2[0]
                li_carne.innerText = storedListData2[1]
                li_extra.innerText = storedListData2[2]
            }
            else if(ps.innerText === 'X-Bacon'){
                img_sandu.src = "/img/x-bacon.d9425a4f.jpg"
                li_pao.innerText = storedListData3[0]
                li_carne.innerText = storedListData3[1]
                li_extra.innerText = storedListData3[2]
            }

            //criando as Li's
            // Pega do listData (EX: listData1), pega as posiçoes de cada item e coloca lá ( EX: li_pao.innerText = String(list[0]) ) 
            // alert(storedListData)

            div.appendChild(img_sandu)
            div.appendChild(ps)
            
            ul.appendChild(li_pao)
            ul.appendChild(li_carne)
            ul.appendChild(li_extra)
            div.appendChild(ul)
            div.appendChild(div_preco_btn)
            
            pe.appendChild(div)
            mainPen.appendChild(pe)
            }


            // let precos = document.querySelectorAll('h1_preco')
            // precos = Number(precos)
            // let ka = []
            // ka.push(precos)
        }
            const lanchePreco = document.querySelector('.lanche_span')
            // const toa = document.querySelector('.final_compra')


            //Finalização da compra
           /* toa.addEventListener('click', () => {
                // ev.preventDefault()
                alert(lanchePreco.innerText)
                // alert(h1Span[0].innerText)
            })*/

            // pegar todos os h1 span do codigo
            let h1Span = document.querySelectorAll('h1 span')
            // somar eles
            let valor_span = 0
            h1Span.forEach(spa => {
                let number = Number(spa.innerText)
                if (number >= 0) {
                    valor_span  += number
                }
                // const number = Number(spa.innerText);
                //     if (!isNaN(number)) {
                //    valor_span += number;
                // }
                })
                // alert(valor_span)
            lanchePreco.innerText = valor_span
                
            // } )
            


        })
        

           /*          
            //criar um id e fazer um .push() no fim, imaginar que o valor da chave id ja é 
            //id = [id1,id2,id3]
            const mainId = JSON.parse(sessionStorage.getItem('Id'))
            let mainIdnovo = []
            mainIdnovo.push(mainId)

            // alert(mainId)

            mainIdnovo.forEach( subId => {
                // alert(subId)

                //1- pegar os itensKey e o listData que terminam com o mesmo numero
                //2- colocar cada um deles em uma div separada com o for(i=1; i<10; i++)
                let ix = 0
                if(mainId.includes('X-Salada')){
                    ix = 1
                    let itKey = `lanche${ix}`
                    let ltKey = `Listdata${ix}`
                    const itData = sessionStorage.getItem(itKey)
                    const LtData = sessionStorage.getItem(ltKey)

                    const main_tr = document.createElement('div')
                    let it = JSON.parse(itData)
                    let lt = JSON.parse(LtData)

                    // img_tr.src = "/img/x-bacon.d9425a4f.jpg"

                    p_tr.innerText = String(it)
                    li_tr.innerText = lt
                    ul_tr.appendChild(li_tr)

                    div_tr.appendChild(img_tr)
                    div_tr.appendChild(p_tr)
                    div_tr.appendChild(ul_tr)


                    main_tr.appendChild(div_tr)
                    mainPen.appendChild(main_tr)
                    // console.log(subId)
            }else if(subId.lenght===2 || mainId.includes('X-Salada')){
                ix = 2
                    let itKey = `lanche${ix}`
                    let ltKey = `Listdata${ix}`
                    const itData = sessionStorage.getItem(itKey)
                    const LtData = sessionStorage.getItem(ltKey)

                    const main_tr = document.createElement('div')
                    let it = JSON.parse(itData)
                    let lt = JSON.parse(LtData)

                    // img_tr.src = "/img/x-bacon.d9425a4f.jpg"

                    p_tr.innerText = String(it)
                    li_tr.innerText = lt
                    ul_tr.appendChild(li_tr)

                    div_tr.appendChild(img_tr)
                    div_tr.appendChild(p_tr)
                    div_tr.appendChild(ul_tr)


                    main_tr.appendChild(div_tr)
                    mainPen.appendChild(main_tr)

            }
            
            })*/
                
            //criar um id e fazer um .push() no fim, imaginar que o valor da chave id ja é 
            //id = [id1,id2,id3]
            //daí para cada id: id.forEach(sub_id => { 
            //const div = document.createelement('div')

            //pegar o numero do sub_id (Ex: push(sub_id[2])
            //let i = sub_id[2]

            //for(let ix=1; ix<5; ix++){
                        
                    //const mainPen = document.querySelector('.main_pen')
                    //  const div = document.createElement('div')
                    //  div.className = 'divd'
                    //  mainPen.appendChild(div)

                    //}


            //}
            //)
                


                // SecPen.appendChild(div_tr)
                // SecPen.appendChild(img_sand)
            
            
                // let i = -1
                // while(i<2){
                    // const ul_sand = document.getElementById('ul_sanduba')

                    // i = i + 1
                    // let li_pedidos = document.createElement('li')

                    // li_pedidos.innerText = list[i]

                    // ul_sand.appendChild(li_pedidos)
                    // SecPen.appendChild(ul_sand)
                    // mainPen.appendChild(main_tr)
            // }

            // let li_pedidos = document.createElement('li')

            // li_pedidos.innerText = listDt[1]

            
            // mainPen.appendChild(li_pedidos)

            //código para criar os LI's 
            

                // console.log(listDt[i])
            }

        // Pegar tal item no sessionStorage pelo --> getItem() 
        // let valor1 = sessionStorage.getItem('random1')

        // Transformar o valor em STRING
        // let valorString = String(valor1)
        // alert(valorString)

        /*let p_sherman = document.getElementById('localP')*/
        // p_sherman.innerText = valorString

        // Para recuperar os dados do sessionStorage
        /*let storedListData = JSON.parse(sessionStorage.getItem('listData'))*/
        // let storedListData = sessionStorage.getItem('listData') Assim mostra só as letras
       /* p_sherman.innerText = storedListData[1]
        console.log(storedListData)*/

        /*const MPen = document.querySelector('.main_pen')
        const srcArmazenados = JSON.parse(sessionStorage.getItem('listImgs'))
        const imgCreated = document.createElement('img')
        imgCreated.src = srcArmazenados[7]
        MPen.appendChild(imgCreated)

      */
        

    },
    components: {
        // CuDashBoard
    }
    ,
    mounted() {
        this.localTeste()
}
}

//    const p_storage = document.getElementById('localText')
//       p_storage.innerText = 'abb'
//    alert(p_storage.innerText)

//    localStorage.getItem('random')

    //funfo
    //alert(localStorage.getItem('random'))

</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

.main_pen {
    /* margin: 0 auto; */
    height: auto;
    width: 650px;
    background-color: rgb(96, 114, 219);
    flex-wrap: wrap;
    display: flex;
}

.pe {
    margin: 0 auto;
    height:auto;
    width: 750px;
    background-color: rgb(206, 206, 206);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* img {
    height: 90px;
    width: 100px;
    } */
    
}

.div_main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    background-color: rgba(255, 228, 196, 0.562);
}.aside {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 200px;
  background-color: #FF9900;
  margin-left: 30px;
    p,h2 {
    
    margin-bottom: 10px;
    }
    button {
        width: 150px;
        height: 50px;
        background-color: #4dff91;
        color: black;
        font-size: 30px;
        font-weight: 700;
    }
}
</style>