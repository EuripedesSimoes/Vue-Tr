<template>
    <div>

    </div> 
    <hr style="width: 300px;">
    <div>
        <input type="text" v-model="div">
        {{ div }}
    </div>
    <hr style="width: 300px;">
    <label>Sports</label>
    <select v-model="sport">
        <option value="fut">futebas</option>
        <option value="vol">volei</option>
    </select>
    <br>
    {{ sport }}
    <hr>
    <div>
        <p>Vc é yag?</p>
        <input type="radio" value="sim" v-model="newsletter" >
        <input type="radio" value="nao" v-model="newsletter" >
        <input type="radio" value="talvez" v-model="newsletter" >
        <br>
        {{ newsletter }}
    </div>

</template>

<script>
export default {
    data() {
        return {
            div: 'Tuzin',
            sport: 'Esportes',
            newsletter: ''
        }
    }
}
</script>

<style>

</style>