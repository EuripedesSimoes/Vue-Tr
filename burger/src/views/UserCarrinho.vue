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
        
        for (let ix = 1; ix<10; ix++){
            const itemKey = `lanche${ix}`
            const listKey = `Listdata${ix}`
            const itemData = sessionStorage.getItem(itemKey)
            const ListData = sessionStorage.getItem(listKey)

            if(itemData, ListData) {
                const item = JSON.parse(itemData)
                const list = JSON.parse(ListData)

                let p_sand = document.getElementById('sanduba')
                p_sand.innerText = String(item)

                if (p_sand.innerText === 'X-Salada'){
                    img_sand.src = "/img/x-salada.18032e04.jpeg"
                    list.innerText = ListData[1]
            }
                else if(p_sand.innerText === 'X-Burger'){
                    img_sand.src = "/img/x-burger.7b5b3440.jpg"
                    list.innerText = ListData[2]
                }else if(p_sand.innerText === 'X-Bacon'){
                    img_sand.src = "/img/x-bacon.d9425a4f.jpg"
                    list.innerText = ListData[3]
                }
                
                
                const SecPen = document.querySelector('.penis')
                SecPen.appendChild(img_sand)
            
            
                // let i = -1
                // while(i<2){
                    const ul_sand = document.getElementById('ul_sanduba')

                    // i = i + 1
                    let li_pedidos = document.createElement('li')

                    // li_pedidos.innerText = list[i]

                    ul_sand.appendChild(li_pedidos)
                    SecPen.appendChild(ul_sand)
                    mainPen.appendChild(SecPen)
            // }
        }

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
        

    }

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