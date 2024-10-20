<template>
  <div>a</div>
  <TheHeader></TheHeader>
  <TheHeader11>
    <template v-slot:title>
      <h1>Slot 1</h1>
    </template>
    <template v-slot:desc>
      <h2>Slot 2</h2>
    </template>
  </TheHeader11>
  
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheHeader11 from './components/TheHeader11.vue';


export default {
  name: 'App',
  components: {
    //HelloWorld
    TheHeader,
    TheHeader11
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
