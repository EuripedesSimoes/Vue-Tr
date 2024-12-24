<template>
  <body :style="{'background-image': 'url('+body_img+')'} ">
    <NavBar id="NavBar"></NavBar>
    <RouterLink to="/peidos" >Pedios</RouterLink>

    <!-- Div dos ROUTER LINKS  -->
    <div class="linkPages">
      
      <!-- ROUTER LINK DOS BURGERS -->
      <RouterLink to="/burgerPage" v-on:click="sumir">
        <img src="assets/hamburger_128px.png" alt="">
         <REP_burger></REP_burger>
      </RouterLink>

      <!-- ROUTER LINK DAS PIZZAS -->
      <RouterLink to="/pizzaPage">
        <REP_pizza></REP_pizza>
      </RouterLink>

      <!-- ROUTER LINK DOS HOTDOGS -->
      <RouterLink to="/hotPage">hotPage</RouterLink>
    </div>
    <RouterView/>


    <!-- <Main_Menu2 id="man"></Main_Menu2> -->
    <!-- <Main_Menu id="mn"></Main_Menu> -->
    <Ingredients></Ingredients>
    <!-- <TheFooter class="footer_container"></TheFooter> -->
  </body>
</template>

çuccccu
<script>
import NavBar from './components/NavBar.vue';
// import Main_Menu from './components/Main.vue';
// import Main_Menu2 from './components/Main2.vue';
import Ingredients from './components/Ingredients.vue';
// import TheFooter from './components/TheFooter.vue';
import REP_burger from './components/REP_burger.vue';
import REP_pizza from './components/REP_pizza.vue';



export default{
  name:"App",
  data(){
    return {
      body_img: 'https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302142_1280.jpg',
    }
  },
  components: {
    NavBar,
    // Main_Menu,
    // Main_Menu2,
    // TheFooter,
    Ingredients,
    REP_burger,
    REP_pizza,
  },
  methods:{
    peidos (){
      const mn = document.getElementById('#man')
      mn.style.display = "none"
    },
    sumir(){
      // const rl = document.querySelectorAll('RouterLink')
      const lp = document.querySelector('.linkPages')
      lp.style.display = 'none'
    }
  }
}
</script>



<style >
.linkPages {
  margin: 0 auto;
  height: 700px;
  width: 900px;
  background-color: aliceblue;
  display: flex;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
body {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  /*
    backdrop-filter:blur(3.5px);
    background-image: url('https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg')
    */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body .footer_container {

    justify-content: flex-end;
    align-items: flex-end;

}


.prod{
    height: auto;
    width: 300px;
    background-color: rgba(58, 58, 58, 0.575);
    border: 4px solid #b9b9b9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
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
</style>
