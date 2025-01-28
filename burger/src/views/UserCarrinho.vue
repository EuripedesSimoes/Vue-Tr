<template>
    <pre>{{ cart }}</pre>
    

    <main class="main_penis">
        <div class="penis">
            <img src="../assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt="">
            <p>Sandubão de penis</p>
            <!-- <p>{{ PV_descontruct }} </p> -->
        </div>
        <CuDashBoard/>
        
        <p id="localP">a</p>
    </main>
</template>

<script>
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
        let valor1 = localStorage.getItem('random')
        let valorString = String(valor1)
        // alert(valorString)
        let p_sherman = document.getElementById('localP')
        p_sherman.innerText = valorString

    }
        // const PV_descontruct = PedidosView

    },
    components: {
        CuDashBoard
        // PedidosView
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
    height: 200px;
    width: 300px;
    background-color: rgb(96, 114, 219);
    flex-wrap: wrap;
    display: flex;
    img {
    height: 90px;
    width: 100px;

    }

}

.penis {
    margin: 0 auto;
    height: 100px;
    width: 200px;
    background-color: rgb(206, 206, 206);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>