<template>
    <main class="main">
        <div class="div_main">
            <form class="form_name">
                <input type="text" id="cu" v-model="txt" v-on:input="nameValidate()">
                <span id="span_required" :style="display_Span" >Senha deve ter 8 caracteres</span>
            </form>

            <form class="form_pass">
                <input type="password" placeholder="Digite Sua senha">
                <span id="span_required" style="display: flex; color: red;">Senha deve ter 5 caracteres</span>
            </form>

            <!--
            <form>
                <input type="text" placeholder="Digite Sua senha" v-model="ip3">
                <span id="span_required" v-if="ip3.length = 0" style="display: none;"></span>
                <span id="span_required" v-else-if="ip3.length < 5" style="display: flex; color: red;">Senha deve ter 5 caracteres</span>
                <span id="span_required" v-else-if="ip3.length >= 5" style="display: flex; color: green;">Senha deve ter 5 caracteres</span>
            </form>-->
        </div>
        <div>
            <input type="radio" value="uc">cuz
            <input type="radio" value="niz">in
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            txt: '',
            campos: document.getElementById('cu'),
            /*campos: document.querySelectorAll('.inputs required'),*/
            spanT: document.getElementById('span_required'),
            display_Span: "display:none;",
            ip3: '',
        }
    },
    methods: {
        nameValidate(){
            console.log(this.txt)

            if (this.txt.length < 3){
                this.display_Span = 'display: flex; color:red'
                
            }
            
            else {
                    this.display_Span = 'display: flex; color:green'
                }
            
            /*if (this.txt < 5)
            {
            this.spanT.setAttribute('id', 'span_required2')
            }*/
            /*
            console.log('entro')
            let camposV = this.campos
            if (camposV[0].value.length < 3) {
                console.log('a')
                this.spanT.style.display = 'block'
            }*/
        }

    }
}

</script>

<style>
.main {
    background-color: rgb(241, 192, 132);
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    column-gap: 10px;
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
span {
    font-size: 12px;
}

#span_required {
    display: none;

}
#span_required2 {
    display: block;
}

</style>