<template>
    <hr>
    <br>
    <hr>
    <div>
        <label for="nombre">nombre: </label><input type="text" id="nombre" v-model="nome">
        {{ nome }}
        <div v-for="todo in todos" :key="todo.id">
            {{ todo.nome }}+{{ todo.dia }}
            {{ fullname2 }}
        </div>
        
    </div>
</template>

<script>
export default{
    name:'App',
    data() {
        return {
            nome: 'a',
            todos: [{
                'dia': 1,
                'nome': 'carlos',
                'profissao': 'estudante',
            }]
        }
    },
    computed: {
        fullname2 (){
            return `${this.todos.dia} ${this.todos.nome}`
        }
    }

}

</script>

<style>

</style>
