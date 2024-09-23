<template>
    <div>
        <button type="button" id="btn">Caliqu</button>
    </div>
    <br>


<!-- V-MODEL -->
    <div> 
        <input type="text" v-model="nome">
        <br>
        {{ nome }}
        <br>
        <hr style="width: 300px;">
        <div>
            <label>Newsletter</label>
            <br>
            <p>Vc é reau ou barca?</p>
            <input type="radio" value="Sim" v-model="newslet"> Si
            <input type="radio" value="Nao" v-model="newslet"> No
            <input type="radio" value="Talvez" v-model="newslet"> Talvez
            <br>
            <hr style="width: 200px;">
            {{ newslet }}
            alert('n')
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            nome: 'jon smith',
            bind: 'cu',
            newslet:'Talvez'
        }
    }

}

</script>

<style>
#btn {
    background-color: lightblue;
}

</style>