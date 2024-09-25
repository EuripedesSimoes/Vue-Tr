<template>
    <div>

    </div> 
    <hr style="width: 300px;">
    <div>
        <input type="text" v-model="div">
        {{ div }}
    </div>
    <hr style="width: 320px;">
    <label>Sports</label>
    <select v-model="sport">
        <option value="fut">futebas</option>
        <option value="vol">volei</option>
    </select>
    <br>
    {{ sport }}
    <hr style="width: 340px;">
    <div>
        <p>Vc é yag?</p>
        <input type="radio" value="sim" v-model="newsletter" >
        <input type="radio" value="nao" v-model="newsletter" >
        <input type="radio" value="talvez" v-model="newsletter" >
        <br>
        {{ newsletter }}
    </div>
    <hr style="width: 360px;">
    <div>
        <button type="button" v-on:click="clicar()">Clique aqui</button>
    </div>
    <br>
    <div class="red" v-on:mouseenter="dento()" v-on:mouseout="fora()">
        Vermelho
    </div>

</template>

<script>
export default {
    data() {
        return {
            div: 'Tuzin',
            sport: 'Esportes',
            newsletter: '',
            clicar() {
                alert('Você clicou, parabens zé')
            },
            dento(){
                let dentoV = document.querySelector('.red')
                dentoV.style.backgroundColor = 'lightblue'
                dentoV.innerText = 'Ai dento'
            },
            fora(){
                let dentoV = document.querySelector('.red')
                dentoV.style.backgroundColor = 'violet'
                dentoV.innerText = 'saiu'
            }
        }
    }
}
</script>

<style>
.red {
    width:  150px;
    height: 150px;
    background-color: red;
}

</style>