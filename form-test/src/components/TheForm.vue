<template>
    <main class="main">
        <div>
            <form class="form_name">
                <input type="text" id="cu" v-model="txt" v-on:input="nameValidate">
                {{ txt }}
                <span id="span_required" style="display: none;">Nome deve ter mais de 3 letras</span>
            </form>
            <form class="form_pass">
                <input type="password" placeholder="Digite Sua senha">
                <span id="span_required" style="display: none;">Senha deve ter 8 caracteres</span>
            </form>
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
        }
    },
    methods: {
        nameValidate(){
            if (this.txt < 5)
            {
                console.log(this.txt)
                this.spanT.style.display = 'block'
            }
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
.form_name {
    display: flex;
    flex-direction: column;
    /*font-size: 10px;
    column-gap: 10px;*/
}
.form_pass {
    display: flex;
    flex-direction: column;
    /*column-gap: 10px;*/
}
span {
    font-size: 12px;
}
</style>