<template>
  <!--
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  -->
<router-view/>
<body :style="{'background-image': 'url('+body_img+')','backdrop-filter':'blur(3.5px)'} ">
  <NavBar></NavBar>

  <Main_Menu></Main_Menu>
  <!--
    <TheForm></TheForm>
    <TheForm2></TheForm2>
    <TheFooter class="footer_container"></TheFooter>
  -->
</body>
  
</template>

<script>
import NavBar from './components/Navbar.vue';
/*
import TheForm from './components/TheForm.vue';
import TheForm2 from './components/TheForm2.vue';
*/
import Main_Menu from './components/Main.vue'


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
/*
  TheForm,
  TheForm2,
*/
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