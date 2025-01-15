<template>

    <main class="main_penis">
        <div class="penis">
            <img src="../assets/pedidos/pedidos_burger/assetsViews/x-bacon.jpg" alt="">
            <p>Sandubão de penis</p>
        </div>
    </main>
</template>

<script>
export default{
    // name: 'userCarrinho',
    data () {
        return {

        }
    },
    methods: {

    }
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
    height: 500px;
    width: 600px;
    background-color: rgb(51, 61, 58);
    display: flex;
    img {
    height: 90px;
    width: 100px;

    }

}

.penis {
    margin: 0 auto;
    height: 400px;
    width: 500px;
    background-color: aquamarine;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>