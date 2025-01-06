<template>
  <body :style="{'background-image': 'url('+body_img+')'} ">
    <NavBar id="NavBar"></NavBar>
     <div id="post-container">
      <button type="button" v-on:click="criarDivMain">Criar div</button>
     </div>
    <RouterLink to="/peidos"  v-on:click="sumir" class="pedios">Pedios</RouterLink>

    <!-- Div dos ROUTER LINKS  -->
    <div class="linkPages">
      
      <!-- ROUTER LINK DOS BURGERS -->
      <RouterLink to="/burgerPage" v-on:click="sumir">
         <REP_burger></REP_burger>
      </RouterLink>

      <!-- ROUTER LINK DAS PIZZAS -->
      <RouterLink to="/pizzaPage" v-on:click="sumir">
        <REP_pizza></REP_pizza>
      </RouterLink>

      <!-- ROUTER LINK DOS HOTDOGS -->
      <RouterLink to="/hotPage" v-on:click="sumir">
        <REP_hotdog></REP_hotdog>
      </RouterLink>
    </div>
    <RouterView/>


    <!-- <Main_Menu2 id="man"></Main_Menu2> -->
    <!-- <Main_Menu id="mn"></Main_Menu> -->
    <Ingredients></Ingredients>
    <!-- <TheFooter class="footer_container"></TheFooter> -->
  </body>
</template>

çuccccu
<script>
import NavBar from './components/NavBar.vue';
// import Main_Menu from './components/Main.vue';
// import Main_Menu2 from './components/Main2.vue';
import Ingredients from './components/Ingredients.vue';
// import TheFooter from './components/TheFooter.vue';
import REP_burger from './components/REP_Pages/REP_burger.vue';
import REP_pizza from './components/REP_Pages/REP_pizza.vue';
import REP_hotdog from './components/REP_Pages/REP_hotdog.vue';


export default{
  name:"App",
  data(){
    return {
      body_img: 'https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302142_1280.jpg',
    }
  },
  components: {
    NavBar,
    // Main_Menu,
    // Main_Menu2,
    // TheFooter,
    Ingredients,
    REP_burger,
    REP_pizza,
    REP_hotdog
  },
  methods:{
    // peidos (){
    //   const mn = document.getElementById('#man')
    //   mn.style.display = "none"
    // },
    sumir(){
      // const rl = document.querySelectorAll('RouterLink')
      const lp = document.querySelector('.linkPages')
      lp.style.display = 'none'

      
    },
    async criarDivMain(){
      const postContainer = document.getElementById('post-container')

      const divteste = document.createElement('div')
      const p = document.createElement('p')
      const img = document.createElement('img')

      divteste.setAttribute('class','divtst')
      img.src = 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg'
      // img.style.height = '10px'

      p.innerText = 'DIV TETSE'
      
      divteste.appendChild(img)
      divteste.appendChild(p)

      postContainer.appendChild(divteste)

      // const req = await fetch("http://localhost:3000/burgers")
      // const reqNew = await req.json()

      // console.log(reqNew)
      // fazer as trocas de variaveis

    }
    // tudo(){
    //   this.sumir()
    //   this.cu()
    // }

// mounted() {
//     this.criarDiv()
// }
  },
}
</script>



<style >

.div_Sec_lunch{
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 400px;
    background-color: rgba(185, 147, 76, 0.325);
    margin: 10px;
    /* column-gap: 30px; */
}
.peidosView > .div_Sec_lunch {
  flex: 1 1 500px;
  align-items: center;
  /* margin: 100px; */
}
.div_Sec_lunch > .div_img {
    height: 250px;
    width: 240px;

}
.div_img {
    background-color: rgb(147, 73, 73);
    img{
      display: block;
        height: 70%;
        width: 70%;
        /* max-height: auto;
        max-width: auto; */
    }
}

.div_desc {
    height: 250px;
    width: 160px;
    background-color: rgb(63, 78, 33);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 30px;
    p {
        margin-top: 20px;
        font-size: 28px;
        background-color: #FF9900;
        color: black;
        font-weight: bolder;
        padding: 3px;
        border-radius: 10px;
    }
    ul {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: start;
        list-style: square;
    }
}


.divtst {
  background-color: green;
  height: 220px;
  width: 250px;
  display: flex;
  img{
    height: 100%;
    width: 70%;
  }

}
.pedios {
  
  color: white;
  text-decoration: none;
  font-size: 30px;
}

.linkPages {
  margin: 0 auto;
  height: 700px;
  width: 1000px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: start;
  column-gap: 10px;
  /* flex-basis: 1 1 700px;
  flex-wrap: wrap; */
}
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
body {
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

/* nav {
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

} */


.prod{
    margin-top: 20px;
    height: auto;
    width: 300px;
    background-color: rgba(58, 58, 58, 0.575);
    border: 4px solid #b9b9b9;
    border-radius: 10px;
    transition: transform;
    transition-duration: 0.6s; /*Na volta, quando o mouse sair do hover*/
}
.prod:hover{
    cursor: pointer;
    transition: 1.8s; /*Para não ficar atrás dos 1.5s da imagem */
    transform: scale(1.35);
    background-color: rgba(58, 58, 58, 0.918);
    img {
        
    transform: rotate(360deg) scale(1.3);
    transition: 1.5s;
    filter: drop-shadow(5px 5px 10px black);
    }
    /*
    div {
        flex-wrap: wrap;
    }
        */
    p {
        
        font-family: "Playwrite IT Trad", cursive;
        transform: scale(1.7, 1.5);
        font-weight: bold;
        color:  #dbdbdb;
        transition: transform 0.5s, background-color 0.7s, color 1.4s;
        filter: drop-shadow(5px 5px 3px black);
    }

}
</style>
