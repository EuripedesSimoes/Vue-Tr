<template>
  <main class="mainP">
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
    <TheOne></TheOne>
</main>
<Login_test></Login_test>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Login_test from './components/login_test.vue';
import TheCabc from './components/TheCabc.vue';
import TheHeader from './components/TheHeader.vue'
import TheOne from './components/TheOne.vue';

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
    TheCabc,
    TheOne,
    Login_test,
  }
}
</script>

<style>
.mainP {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid black;
  column-gap: 20px;
}
 .mainP > div {
  border: 1px solid red;
} 


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
