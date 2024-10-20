<template>
    <section class="sec">

        <div id="div1">
            <label for="nome">Nome : </label>
            <input type="text" id="nome" style="width: 100px;" v-model="nome">
            <label for="idade">Idade : </label>
            <input type="text" id="idade" style="width: 100px;">

            <button type="submit" @click="cl">Clicar</button>
        </div>


        <div id="div2">
                <!-- {{ name }} -->
                <!-- {{ age }} -->
                  <p id="par"></p>

        </div>
        
    </section>
</template>

<script>
export default {
data () {

    return {
            name: "a",
            // age: "b",
    }  
},

methods: {
        cl(){
            let nome = document.getElementById('nome')
            let par = document.getElementById('par')
            par.innerText = nome.value+","

            // let nombre = ""

            // let idade = document.getElementById('idade')
            // age = idade.value 
        }
    }
} 

</script>

<style>
.sec {
    width: 750px;
    height: 500px;
    border: 5px solid rgb(245, 199, 144);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    /* row-gap: 15px; */
}
#div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px; 
}
#div2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px; 
}

.sec > div  {
    width: 250px;
    height: 200px;
    border: 5px solid rgb(81, 66, 47);
}
</style>