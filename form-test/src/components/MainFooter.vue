<template>
    <div class="footer_div">
        <h1>Copyright &COPY; 2024 - Todos os direitos reservados</h1>
        <h1>Desenvolvido por: <br> Eurípedes Júnior</h1>
    </div>
</template>


<script>
export default{
    name: 'FooterA',
    data(){
        return {

        }
    },
    components: {

    }
}

</script>


<style scoped>
*{
margin: 0;
padding: 0;
box-sizing: 0;
}

.footer_div {
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100vw;
    background-color: black;
    color: wheat;
}

</style>