<template>
    <!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    -->
  <router-view/>
  <NavBar></NavBar>
  <Footer_1></Footer_1>
  <Ingredientes_1></Ingredientes_1>
</template>


<script>
import Footer_1 from "./components/TheFooter.vue";
import Ingredientes_1 from "./components/Ingredients.vue"
import NavBar from "./components/NavBar.vue";

export default{
  name:"App",
  data(){
    return {

    }
  },
  components: {
    Footer_1,
    Ingredientes_1,
    NavBar
  }
}
</script>



<style lang="scss">
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
</style>
