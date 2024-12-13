<template>
  <body>
  <NavBar/>
  <TheForm2></TheForm2>
    
  </body>
</template>

<script>/*
import FormEscalacao from './components/TheForm.vue';*/
import TheForm2 from './components/TheForm2.vue';
import NavBar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
   /* FormEscalacao,*/
    TheForm2,
    NavBar
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
body{
  background-color: rgb(102, 82, 121);
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

</style>
