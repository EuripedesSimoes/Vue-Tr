<template>
  <body :style="{'background-image': 'url('+body_img+')'} ">
    <NavBar id="NavBar"></NavBar>
    <RouterLink to="/peidos" >Pedios</RouterLink>
    <div class="linkPages">
      
      <RouterLink to="/burgerPage" >
        <img src="assets/hamburger_128px.png" alt="">
         <burgerREPRESENT></burgerREPRESENT>
      </RouterLink>

      <RouterLink to="/pizzaPage">pizzaPage</RouterLink>

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
import burgerREPRESENT from './components/burgerREPRESENT.vue';


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
    burgerREPRESENT,
  },
  methods:{
    peidos (){
      const mn = document.getElementById('#man')
      mn.style.display = "none"
    }
  }
}
</script>



<style >
.linkPages {
  margin: 0 auto;
  height: 700px;
  width: 700px;
  background-color: aliceblue;
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
</style>
