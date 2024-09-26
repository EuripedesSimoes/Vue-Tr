<template>
    <div>
        <input type="text" v-model="nome">
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
