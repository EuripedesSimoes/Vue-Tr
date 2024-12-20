<template>
<router-view/>
<body :style="{'background-image': 'url('+body_img+')','backdrop-filter':'blur(3.5px)'} ">
  <NavBar></NavBar>

  <Main_Menu></Main_Menu>
  <FooterA></FooterA>
  <!--
  <TheForm></TheForm>
  <TheForm2></TheForm2>
  <TheFooter class="footer_container"></TheFooter>
  -->
</body>
  
</template>

<script>
import NavBar from './components/Navbar.vue';
import Main_Menu from './components/Main.vue'
import FooterA from './components/MainFooter.vue';
/*
import TheForm from './components/TheForm.vue';
import TheForm2 from './components/TheForm2.vue';
*/


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
  FooterA
/*
  TheForm,
  TheForm2,
*/
}
}
</script>



<style >
:root {
  --pg1: #dbdbdb;
  --pg2: #42b983;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

body {
    background-color: #2c3e50;
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
  

  
    /*
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
    */

</style>