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
    <select v-model="sport"><!--Ao selecionar vai escrever o value-->
        <option value="fut">futebas</option>
        <option value="vol">volei</option>
    </select>
    <br>
    {{ sport }}<!--Ao selecionar vai escrever o value-->
    <hr style="width: 340px;">
    <div>
        <p>Vc se chama Carlos?</p>
        <input type="radio" value="sim" v-model="newsletter" >
        <input type="radio" value="nao" v-model="newsletter" >
        <input type="radio" value="talvez" v-model="newsletter" >
        <br>
        {{ newsletter }}
    </div>
    <hr style="width: 360px;">
    <div>
        <button type="button" v-on:click.once="clicar">Clique aqui</button>
    </div>
    <br>
    <div class="red" v-on:mouseenter="dento" v-on:mouseout="fora">
        Vermelho
    </div>

    <form action="https://www.google.com.br/">
        <button type="submit">google</button>
    </form>
    <form :action="gg">
        <input type="text" @keyup="tecla">
        <button type="submit" @click.prevent="clicar2">google 2 v-bind</button>
    </form>
    <hr>


    <div>
        <input type="text" v-model="fullname">
        Jon Snow + {{ fullname }}
    </div>

</template>

<script>
export default {
    name:'App',
    data() {
        return {
            div: 'Tuzin',
            sport: 'Esportes',
            newsletter: '',
            clicar() {
                alert('Você clicou, parabens zé')
            },
            clicar2() {
                console.log('1 vez')
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
            },
            tecla(ev) {
                console.log('Tecla apertada', ev)
            },
            gg: 'https://www.google.com.br/',

            userName: {
                f_name: 'Cleitu',
                l_name: 'Rasta'
            }
        }
    },
    computed: {
        fullname() {
            return `${this.userName.f_name} ${this.userName.l_name}`
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