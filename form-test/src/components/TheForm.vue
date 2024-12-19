<template>
    <main class="main">
        <div class="div_main">
            <form class="form_name">
                <input type="text" v-model="txt" v-on:input="nameValidate">
                <span id="span_required" :style="display_Span" >Senha deve ter 8 caracteres</span>
                {{ txt.length }}
            </form>

            <form>
                <input type="text" placeholder="Digite Sua senha" v-model="txt">
                <span id="span_required3" v-if="txt.length < 5" style="display: flex; color: red;">Senha deve ter 5 caracteres</span>
                <span id="span_required4" v-else-if="txt.length >= 5" style="display: flex; color: green;">Senha correta</span>
            </form>
        </div>
        <div>
            <input type="radio" value="pass" v-model="txt">pass
            <input type="radio" value="password" v-model="txt">password
            <p>Você selecionou <br> {{ txt }}</p>
            <br>
        </div>
        <div class="div_cb">
            <input type="checkbox" v-model="cb" value="1"> qqr coisa
            <input type="checkbox" v-model="cb2" value="2"> qqr coisa2
            <input type="checkbox" v-model="cb3" value="3"> qqr coisa3
            {{ cb }} {{ cb2 }} {{ cb3 }}
        </div>
        
    </main>
</template>

<script>
export default {
    name: "FormEscalacao",
    data() {
        return {
            txt: '',
            cb1: '',
            cb2: '',
            cb3: '',
            spanT: document.getElementById('span_required'),
            display_Span: "display:none;",
            ip3: ''
        }
    },
    methods: {
        nameValidate(){
            console.log(this.txt)

            if (this.txt.length < 5){
                this.display_Span = 'display: block; color:red;'
                
            }
            
            else {
                    this.display_Span = 'display: block; color:green;'
                    /*this.spanT.innerText = 'Caracteres certos'*/
                }
            
        }
    }
}

</script>

<style scoped>
/*
.divteste {
    height: 480px;
    width: 480px;
    background-color: black;
    backdrop-filter: sepia(90%);
    color: white;
}
*/

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
div {
    height: 200px;
    width: 200px;
    border: 1px solid black;
}
.main {
    background-color: rgba(250, 183, 100, 0.637);
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.div_main > form {
    padding: 10px;
}

.form_name, .form_pass, .form_pass2 {
    display: flex;
    flex-direction: column;
    /*font-size: 10px;
    column-gap: 10px;*/
}
.div_cb{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
span {
    font-size: 12px;
}

#span_required {
    display: none;

}
#span_required2 {
    display: block;
}

div{
    height: 130px;
}

</style>