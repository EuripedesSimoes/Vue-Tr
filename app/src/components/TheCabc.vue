<template>
    <main class="main">
        <div>
            <p>Cabecalho 2</p>
        </div>

        <div v-if="user === 'adm'" >
            <p>usuario é {{ user }}</p>
        </div>
        <div v-else>
            <p>usuario esta como {{ user }}</p>
            <p>{{ user }} leva salve</p>
        </div>
    </main>

</template>

<script>

export default {
    data() {
        return {

user: 'adm'
            
        }
    }
}

</script>

<style>


p {
    color: lightgreen;
}

</style>
