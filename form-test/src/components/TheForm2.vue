<template>
    <main class="main">
        <div class="div_main">
            <form v-on:submit="createOrder">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pao</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                        {{ pao.tipo }}
                    </option> 
                </select>
                <label for="carne">Escolha a carne do seu Burger:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione sua carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                        {{ carne.tipo }}
                    </option>
                    
                </select>
                
                <input type="submit" value="Botao do json server" >
            </form>
        </div>
        <!--
        {{ paes }}
        <br>
        <br>
        {{ carnes }}
        <br>
        <br>
        -->
    </main>
</template>

<script>
export default {
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
        async getIngredients(){
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
        },

        // transforma os dados preenchidos em dados para as variáveis existentes
        async createOrder(e){
            e.preventDefault(); //pode ser v-on:submit.prevent também

            const data = {
                pao: this.pao,
                carne: this.carne
            }
            console.log(data)
        }
    },
    mounted() {
        this.getIngredients()
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