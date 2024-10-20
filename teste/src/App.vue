<template>
 <TheHeader v-if="showHeader">
  
 </TheHeader>
 <div v-show="nome1Show">
 {{ nome1 }}
 </div>
 <div v-show="nome2Show">
  {{ nome2 }}
 </div>

<div v-bind:class="{'reau': reauconf, 'barca':barconf}">
reau ou barca
 </div><br>

  <TheOne></TheOne>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheOne from './components/TheOne.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheOne
  },
  data () {
    return {
      showHeader: true,
      nome1: 'Cleitu Rasta',
      nome2: 'Cabeça de Gelo',
      nome1Show: true,
      nome2Show: false,
      reauconf: true,
      barconf: false
    }
  }
}
</script>

<style>
.reau {
  color: gray;
  font-size: 40px;
}
.barca {
  color: red;
  font-size: 40px;
}
</style>
