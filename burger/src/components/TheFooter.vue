<template>
    <div class="footer_container">
<!--         
        <button name="btn1" @click="suma(this.name)">1</button>
        <button name="btn1" @click="suma(this.name)">2</button>
        <button name="btn1" @click="suma(this.name)">3</button> -->

        <RouterLink to="/btn1">Botao 1</RouterLink>
        <RouterLink to="/btn2">Botao 2</RouterLink>
        <RouterLink to="/btn3">Botao 3</RouterLink>
    </div>
    <router-view/>
</template>

<script>
export default {
    name: "Footer_1",
    data() {
        return {
            IsActive: 0
        }
    },
    methods: {
        suma(ev) {
            const buttons = document.querySelectorAll('button')
            buttons.forEach(button => {
                if (button.name !== ev){
                    button.classList.add('hide')
                }
            })
            
        }
    }
}

</script>

<style scoped>
*{
margin: 0;
padding: 0;
box-sizing: 0;
}
.hide {
    display: none;
}


.footer_container{
    /*display: flex;
    justify-content: flex-end;
    align-items: flex-end;
*/
    height: 200px;
    width: auto;
    background-color: rgb(13, 31, 25);
}

button{
    height: 200PX;
    width: 200px;
}
</style>