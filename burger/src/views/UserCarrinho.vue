<template>
    <pre>{{ cart }}</pre>
    

    <main class="main_penis">
        <div class="penis">
            <img src="../assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt="">
            <p>Sandubão de penis</p>
            <!-- <p>{{ PV_descontruct }} </p> -->
        </div>
        <CuDashBoard/>
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
        // const PV_descontruct = PedidosView

    },
    components: {
        CuDashBoard
        // PedidosView
    },
    

}
   

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
    background-color: rgb(51, 61, 58);
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
    background-color: aquamarine;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>