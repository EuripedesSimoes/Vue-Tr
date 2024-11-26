<template>
    <main class="main">
        <div class="div_main">
            <!--
            <select name="nomesForm" id="nomesForm">
                <option v-for="nom in nomesJS" :key="nom.id" :value="nom.tipo">
                    {{ nom.tipo }}
                </option>
            </select>-->
            <select name="pao" id="pao">
                <option value="">Selecione o seu pao</option>
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                    {{ pao.tipo }}
                </option> 
            </select>
            <select name="carne" id="carne">
                <option value="">Selecione sua carne</option>
                <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                    {{ carne.tipo }}
                </option>
            </select>
        </div>
        {{ paes }}
        <br>
        <br>
        {{ carnes }}
        <br>
        <br>
        <button @click="json_api">Botao do json server</button>
    </main>
</template>

<script>
export default {
    name: "FormEscalacao",
    data() {
        return {
            spanT: document.getElementById('span_required'),
            display_Span: "display:none;",
            ip3: '',
            paes: null,
            carnes: null,
            pao: null,
            carne: null,
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
            
        },
        async json_api(){
            //Seleciona o link que tem o json
            const req = await fetch("http://localhost:3000/ingredientes");
            //const req2 = await fetch("http://localhost:3000/futReserva");/

            //Transforma os dados em json
            const data = await req.json();
            //const data2 = await req2.json();

            //transfere os dados para as variaveis criadas
            this.paes = data.paes
            this.carnes = data.carnes
            /*this.nomesJS = data.nomes;
            this.profissaJS = data.profissao;
            this.escalJS = data2.escalacao;*/
        }
    },
    mounted() {
        this.json_api()
    }
}

</script>

<style scoped>
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
    background-color: rgb(241, 192, 132);
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
    flex-direction: column;
    align-items: center;
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

select {
    width: 170px;
    display: flex;
    margin-bottom: 30px;
}

</style>