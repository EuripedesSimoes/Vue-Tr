<template>
  <div class="linkPages">

     <!-- ROUTER LINK DOS BURGERS -->
     <RouterLink to="/burgerPage">
         <REP_burger></REP_burger>
      </RouterLink>

      <!-- ROUTER LINK DAS PIZZAS -->
      <RouterLink to="/pizzaPage">
        <REP_pizza></REP_pizza>
      </RouterLink>

      <!-- ROUTER LINK DOS HOTDOGS -->
      <RouterLink to="/hotPage">
        <REP_hotdog></REP_hotdog>
      </RouterLink>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/

import REP_burger from '../components/REP_Pages/REP_burger.vue';
import REP_pizza from '../components/REP_Pages/REP_pizza.vue';
import REP_hotdog from '../components/REP_Pages/REP_hotdog.vue';

export default {
  name: 'HomeView',
  components: {
    /*HelloWorld*/
    REP_burger,
    REP_pizza,
    REP_hotdog,
  }
}
</script>
