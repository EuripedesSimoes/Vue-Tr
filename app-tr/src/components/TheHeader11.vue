<template>
    <hr>
    <hr>
    <div>
        <label for="nombre">nombre: </label><input type="text" id="nombre" v-model="nome">
        {{ nome }}
    </div>
</template>

<script>
export default{
    name:'App',
    data() {
        return {
            nome: 'a',
        }
    },

    //watch(nome, cb:(newValue, oldValue) => {
    //        console.log('ab')
    //})

}

</script>

<style>

</style>
