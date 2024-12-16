<template>
    <div class="div_menu">
        <div class="prod" id="prod_burger">
            <img src="" alt="">
        </div>
        <div class="prod" id="prod_pizza">
            <img src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png" alt="">
        </div>
        <div class="prod" id="prod_hotdog">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default{
    name:'Main_Menu',
    data(){
        return{
            blur: '5px'

        }
    },
    components: {

    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

.div_menu {
    margin: 0 auto;
    height: 80vh;
    width: 80vw;
    background-color: rgba(245, 245, 220, 0.514);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
}

.prod{
    height: 50%;
    width: 28%;
    background-color: rgba(127, 255, 212, 0.336);
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}
/*
.prod:hover{
    transition: 2s;
    transform: scale(1.3);

}
*/
img {
    height: 240px;
    width: 240px;
}

img:hover {
    transform: rotate(360deg) scale(1.3);
    transition: 2.2s;
    filter: drop-shadow(5px 5px 10px black);
}
</style>
