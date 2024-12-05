<template>
    <div><button v-on:click="getIng">Aperte para pegar os ingrediente</button></div>
</template>

<script>
export default {
    name: "Ingredientes_1",
    data(){
        return {
            beefs: null,
            breads: null,
            beef: null,
            bread: null,
        }
    },
    methods: {
        async getIng() {

            //Seleciona o link que tem o json
            const req = await fetch("http://localhost:3000/ingredientes")

            //Transforma os dados em json
            const data = await req.json()

            //transfere os dados para as variaveis criadas
            this.beefs = data.carnes
            this.breads = data.paes
            console.log(this.beefs)
            console.log(this.breads)
        }
    }
}
</script>

<style>
</style>