<template>
    <!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    -->
  <body :style="{'background-image': 'url('+body_img+')'} ">
    <NavBar id="NavBar"></NavBar>
    <RouterLink to="/peidos" v-on:click="peidos">Peidos</RouterLink>
    <Main_Menu></Main_Menu>
    <Ingredients></Ingredients>
    <TheFooter class="footer_container"></TheFooter>
  </body>
    
  <router-view/>
</template>

çucccc
<script>
import NavBar from './components/NavBar.vue';
import Ingredients from './components/Ingredients.vue';
import TheFooter from './components/TheFooter.vue';
import Main_Menu from './components/Main.vue';


export default{
  name:"App",
  data(){
    return {
      body_img: 'https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302142_1280.jpg',
    }
  },
  components: {
    NavBar,
    Main_Menu,
    TheFooter,
    Ingredients,
  },
  methods:{
    peidos (){
      const nav_bar = document.querySelector('#NavBar')
      nav_bar.style.display = "none"
    }
  }
}
</script>



<style >
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
  backdrop-filter:blur(3.5px);
  -webkit-backdrop-filter: blur( 3.5px );
  /*
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
