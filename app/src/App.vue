<template>
  <TheHeader></TheHeader>
  <TheCabc></TheCabc>
  <div v-for="objo in to_do"
  v-bind:key='objo.id'
  >
    {{ objo.id }}
    <br>
    {{ objo.userId }}
    <br>
    {{ objo.userName }}
    <br>
  </div>

  <div v-for="objo in to_do"
  v-bind:key='objo.id'>
    <p>{{ objo.id + 2 + ' 1'}}</p>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TheCabc from './components/TheCabc.vue';
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  data() {

      return {
        to_do: [
          {'userId': 1,
          'userName':'Sim',
          'id':1
    },
    
    {'userId': 2,
          'userName':'NN',
          'id':2
    }
  ]
 }
  },
  components: {
    /*(HelloWorld,*/
    TheHeader,
    TheCabc
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
