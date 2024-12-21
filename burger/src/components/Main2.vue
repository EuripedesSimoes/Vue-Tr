<template>
    <RouterLink to="/BurgerPage">Página dos hamburgers</RouterLink>

    <div class="div_menu">
        <div class="prod" id="prod_burger">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="">
            <p>Burger</p>
        </div>
        <div class="prod" id="prod_pizza">
            <img src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png" alt="">
            <p>Pizza</p>
        </div>
        <div class="prod" id="prod_hotdog">
            <img src="../assets/hotdog_512px.png" alt="">
            <p>Hotdog</p>
        </div>
    </div>
</template>

<script>
export default{
    name:'Main_Menu2',
    data(){
        return{
            /*blur: '5px'*/

        }
    },
    components: {

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+IT+Trad:wght@100..400&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

.div_menu {
    margin: 0 auto;
    height: 80vh;
    width: 80vw;
    background-color: rgba(245, 245, 220, 0.699);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
}

.prod{
    height: 54%;
    width: 28%;
    background-color: rgba(58, 58, 58, 0.575);
    border: 4px solid #b9b9b9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform;
    transition-duration: 0.6s; /*Na volta, quando o mouse sair do hover*/
}
.prod:hover{
    cursor: pointer;
    transition: 1.8s; /*Para não ficar atrás dos 1.5s da imagem */
    transform: scale(1.35);
    background-color: rgba(58, 58, 58, 0.918);
    img {
        
    transform: rotate(360deg) scale(1.3);
    transition: 1.5s;
    filter: drop-shadow(5px 5px 10px black);
    }
    /*
    div {
        flex-wrap: wrap;
    }
        */
    p {
        
        font-family: "Playwrite IT Trad", cursive;
        transform: scale(1.7, 1.5);
        font-weight: bold;
        color:  #dbdbdb;
        transition: transform 0.5s, background-color 0.7s, color 1.4s;
        filter: drop-shadow(5px 5px 3px black);
    }

}
img {
    height: 240px;
    width: 240px;
    transition: transform;
    transition-duration: 1.2s;
    /*
    transition-timing-function: ease-in;
    transition-delay: 0.5s;
    */
}

/*
img:hover {
    transform: rotate(360deg) scale(1.3);
    transition: 1.5s;
    filter: drop-shadow(5px 5px 10px black);
}
*/
#prod_burger, #prod_pizza, #prod_hotdog {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    font-family: "Playwrite IT Trad", cursive;
    font-weight: bold;
    font-size: 28px;
    position: relative;
    transition: all 1s;
}
</style>
