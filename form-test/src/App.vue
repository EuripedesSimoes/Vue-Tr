<template>
  <burger_esboço/>
  <TheForm2></TheForm2>
</template>

<script>/*
import FormEscalacao from './components/TheForm.vue';*/
import TheForm2 from './components/TheForm2.vue';
import burger_esboço from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
   /* FormEscalacao,*/
    TheForm2,
    burger_esboço
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
