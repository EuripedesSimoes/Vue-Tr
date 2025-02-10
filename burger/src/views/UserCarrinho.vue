<template>
    <pre>{{ cart }}</pre>
    

    <main class="main_penis">
        <div class="penis">
            <!-- <img src="../assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt=""> -->
            <img src="" alt="" id="img_sanduba">
            <p id="sanduba">Sandubão de penis</p>
            <ul id="ul_sanduba"></ul>
            <!-- <p>{{ PV_descontruct }} </p> -->
        </div>
        <CuDashBoard/>
        
        <p id="localP">a</p>
    </main>
</template>

<script>
// import { forEach } from 'core-js/core/array';
import CuDashBoard from '../components/CuDashBoard.vue'
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
            // let x_lanche = JSON.parse(sessionStorage.getItem('x'))
            // alert(x_lanche)
            // let p_sand = document.getElementById('sanduba')
            // p_sand.innerText = x_lanche
            // let img_sand = document.getElementById('img_sanduba')
            // if (p_sand.innerText === 'X-Salada'){
            //     img_sand.src = "/img/x-salada.18032e04.jpeg"
            // }else if(p_sand.innerText === 'X-Burger'){
            //     img_sand.src = "/img/x-burger.7b5b3440.jpg"
            // }else if(p_sand.innerText === 'X-Bacon'){
            //     img_sand.src = "/img/x-bacon.d9425a4f.jpg"
            // }
            

            
        const mainPen = document.querySelector('.main_penis')
        // let listDt = JSON.parse(sessionStorage.getItem('listData'))
        const img_sand = document.getElementById('img_sanduba')


        let mainId = JSON.parse(sessionStorage.getItem('Id'))

        mainId.forEach( subId => {
            const div = document.createElement('div')
            const p = document.createElement('p')
            const img_sand = document.getElementById('img_sanduba')
            div.className = 'divd'
            // alert(subId)
            p.innerText = subId
            div.appendChild(p)
            
            mainPen.appendChild(div)

            if (p.innerText === 'X-Salada'){
                img_sand.src = "/img/x-salada.18032e04.jpeg"
            }
            else if(p.innerText === 'X-Burger'){
                img_sand.src = "/img/x-burger.7b5b3440.jpg"
            }else if(p.innerText === 'X-Bacon'){
                img_sand.src = "/img/x-bacon.d9425a4f.jpg"
            }
                
            div.appendChild(img_sand)
            
        })
        
        for (let ix = 1; ix<10; ix++){
            let itemKey = `lanche${ix}`
            // let listKey = `Listdata${ix}`
            const itemData = sessionStorage.getItem(itemKey)
            // const ListData = sessionStorage.getItem(listKey)

            if(itemData) {
                const item = JSON.parse(itemData)
                // const list = JSON.parse(ListData)

                let p_sand = document.getElementById('sanduba')
                // let ul_sand = document.getElementById('ul_sanduba')
                p_sand.innerText = String(item)

                if (p_sand.innerText === 'X-Salada'){
                    img_sand.src = "/img/x-salada.18032e04.jpeg"
                    /*const li_pao = document.createElement('li')
                    li_pao.innerText = String(list[0])
                    const li_carne = document.createElement('li')
                    li_carne.innerText = String(list[1])
                    const li_extra = document.createElement('li')
                    li_extra.innerText = String(list[2])
                    ul_sand.appendChild(li_pao)
                    ul_sand.appendChild(li_carne)
                    ul_sand.appendChild(li_extra)*/
                    // list.innerText = ListData[1]
            }
                else if(p_sand.innerText === 'X-Burger'){
                    img_sand.src = "/img/x-burger.7b5b3440.jpg"
                    /*const li_pao = document.createElement('li')
                    li_pao.innerText = String(list[0])
                    const li_carne = document.createElement('li')
                    li_carne.innerText = String(list[1])
                    const li_extra = document.createElement('li')
                    li_extra.innerText = String(list[2])
                    ul_sand.appendChild(li_pao)
                    ul_sand.appendChild(li_carne)
                    ul_sand.appendChild(li_extra)*/
                    // list.innerText = ListData[2]
                }else if(p_sand.innerText === 'X-Bacon'){
                    img_sand.src = "/img/x-bacon.d9425a4f.jpg"
                    /*const li_pao = document.createElement('li')
                    li_pao.innerText = String(list[0])
                    const li_carne = document.createElement('li')
                    li_carne.innerText = String(list[1])
                    const li_extra = document.createElement('li')
                    li_extra.innerText = String(list[2])
                    ul_sand.appendChild(li_pao)
                    ul_sand.appendChild(li_carne)
                    ul_sand.appendChild(li_extra)
                    // list.innerText = ListData[3]*/
                }
            }
                
              
        }  
                // const SecPen = document.querySelector('.penis')
                const div_tr = document.createElement('div')   
                const img_tr = document.createElement('img')  
                const p_tr = document.createElement('p')  
                const ul_tr = document.createElement('ul')  
                const li_tr = document.createElement('li')

                //1- pegar os itensKey e o listData que terminam com o mesmo numero
                //2- colocar cada um deles em uma div separada com o for(i=1; i<10; i++)
                for (let ix = 1; ix<10; ix++){
                    let itKey = `lanche${ix}`
                    // let ltKey = `Listdata${ix}`
                    const itData = sessionStorage.getItem(itKey)
                    // const LtData = sessionStorage.getItem(ltKey)

                    if(`lanche${ix}` == true){
                        
                        const main_tr = document.createElement('div')
                        let it = JSON.parse(itData)
                        // let lt = JSON.parse(LtData)

                        img_tr.src = "/img/x-bacon.d9425a4f.jpg"

                        p_tr.innerText = String(it)
                        // li_tr.innerText = lt
                        ul_tr.appendChild(li_tr)

                        div_tr.appendChild(img_tr)
                        div_tr.appendChild(p_tr)
                        div_tr.appendChild(ul_tr)


                        main_tr.appendChild(div_tr)
                        mainPen.appendChild(main_tr)

                    }
                    
                }

                
        // let mainId = JSON.parse(sessionStorage.getItem('Id'))
        // let arra = [mainId]

        // arra.forEach( subId => {
        //     for(let ix=0;ix<3;ix++){
            
        //     if(subId[ix] !== undefined){
        //         alert(subId[ix])
            
        //     const div = document.createElement('div')
        //     const ps = document.createElement('p')
        //     const img_sandu = document.createElement('img')
        //     div.className = 'divd'
        //     // alert(subId)
            
        //     ps.innerText = subId[ix]
            

        //     if (ps.innerText === 'X-Salada'){
        //         img_sandu.src = "/img/x-salada.18032e04.jpeg"
        //     }
        //     else if(ps.innerText === 'X-Burger'){
        //         img_sandu.src = "/img/x-burger.7b5b3440.jpg"
        //     }else if(ps.innerText === 'X-Bacon'){
        //         img_sandu.src = "/img/x-bacon.d9425a4f.jpg"
        //     }
                
            
        //     div.appendChild(ps)
        //     div.appendChild(img_sandu)
            
        //     mainPen.appendChild(div)
        //     }
        // }
        // })
        

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
                        
                    //const mainPen = document.querySelector('.main_penis')
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

        /*const MPen = document.querySelector('.main_penis')
        const srcArmazenados = JSON.parse(sessionStorage.getItem('listImgs'))
        const imgCreated = document.createElement('img')
        imgCreated.src = srcArmazenados[7]
        MPen.appendChild(imgCreated)

      */
        

    },
    components: {
        CuDashBoard
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

.main_penis {
    margin: 0 auto;
    height: 400px;
    width: 700px;
    background-color: rgb(96, 114, 219);
    flex-wrap: wrap;
    display: flex;

}

.penis {
    margin: 0 auto;
    height:150px;
    width: 690px;
    background-color: rgb(206, 206, 206);
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
    height: 90px;
    width: 100px;

    }
    
}

</style>