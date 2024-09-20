<template>
    <div>
        <p>Cabecalho 2</p>
    </div>

    <div v-if="user === 'adm'" >
        <p>usuario é {{ user }}</p>
    </div>
    <div v-else>
        <p>usuario esta como {{ user }}</p>
    </div>

</template>

<script>

export default {
    data() {
        return {

user: 'am'
            
        }
    }
}

</script>

<style>
p {
    color: lightgreen;
}

</style>
