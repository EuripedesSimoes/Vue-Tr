<template>
  <body class="bodyMine">
    <!-- :style="{'background-image': 'url('+body_img+')'} " -->
    <NavBar id="NavBar"></NavBar>
     <div id="post-container">
      <button type="button" v-on:click="criarDivMain">Criar div blend</button>
     </div>
    <RouterLink to="/peidos"  v-on:click="sumir" class="pedios">Pedios</RouterLink>

    <!-- Div dos ROUTER LINKS  -->
    <div >
      <!-- <HomeView></HomeView> -->
    <!-- <div class="linkPages">  -->
      <!-- ROUTER LINK DOS BURGERS -->
       
      <!-- <RouterLink to="/burgerPage" v-on:click="sumir">
         <REP_burger></REP_burger>
      </RouterLink> -->

      <!-- ROUTER LINK DAS PIZZAS -->

      <!-- <RouterLink to="/pizzaPage" v-on:click="sumir">
        <REP_pizza></REP_pizza>
      </RouterLink> -->

      <!-- ROUTER LINK DOS HOTDOGS -->

      <!-- <RouterLink to="/hotPage" v-on:click="sumir">
        <REP_hotdog></REP_hotdog>
      </RouterLink> -->
    </div>
    <RouterView/> <!-- Precisar ficar ativo para aparecer na pagina -->

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
// import HomeView from './views/HomeView.vue';
// import TheFooter from './components/TheFooter.vue';
//import REP_burger from './components/REP_Pages/REP_burger.vue';
//import REP_pizza from './components/REP_Pages/REP_pizza.vue';
//import REP_hotdog from './components/REP_Pages/REP_hotdog.vue';


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
    // HomeView
    // REP_burger,
    // REP_pizza,
    // REP_hotdog
  },
  methods:{
    // submitar(){
    //     alert('cu')
        
    // },
    // peidos (){
    //   const mn = document.getElementById('#man')
    //   mn.style.display = "none"
    // },
    sumir(){
      // const rl = document.querySelectorAll('RouterLink')
      
      // const lp = document.querySelector('.linkPages')
      // lp.style.display = 'none'
      
      // lp.classList.add('suma')

      const bodyy = document.querySelector('.bodyMine')
      bodyy.setAttribute('id', 'bodyBlend')
      
      const pedios = document.querySelector('.pedios')
      pedios.style.display = 'none'
      // const bodyy = document.querySelector('body')
      // bodyy.style.backgroundBlendMode = 'overlay'
      // bodyy.style.backgroundColor = 'red'
      // bodyy.style.backgroundImage = 'var(--bg)'
      // bodyy.setAttribute('class', 'bodyBlend')
  // background-blend-mode: overlay;
  
  // bodyy.style.backgroundBlendMode = 'overlay'
  //     bodyy.style.backgroundColor = 'rgba(0, 0, 0, 0.417)'
      
    }
    // ,
    // blend(){
    //   const bodyy = document.querySelector('.bodyMine')
    //   bodyy.setAttribute('id', 'bodyBlend')
    // }
    ,
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

    },
    // tudo(){
    //   this.sumir()
    //   this.cu()
    // }
  },
}
</script>



<style >

/* .peidosView > .div_Sec_lunch {
  flex: 1 1 500px;
  align-items: center;
  margin: 100px;
} */
/* .div_Sec_lunch > .div_img {
  height: 250px;
  width: 240px;

} */
@media screen and (min-width:500px) {
  .div_Sec_lunch {
    max-width: 400px;
  }
  .div_desc {
    width: 160px;
    p {
      font-size: 28px;
    }
    ul {margin-left: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: start;
        list-style: square;}
  }
  .div_preco_btn {
    max-width: 400px;
    margin-left: -240px;
    margin-top: -8px;
  }




}@media screen and (max-width:499px) {
  .div_Sec_lunch {
    max-width: 330px;
  }
  .div_desc {
    width: 130px;
    p {
      font-size: 26px;
    } 
    ul {
      margin-left: 18px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: start;
        list-style: square;
        font-size: 15px;
        /* text-align: center; */
    }
  }
  .div_preco_btn {
    max-width: 330px;
    margin-left: -200px;
    margin-top: -22px;
  }
}


.div_Sec_lunch{
    border: 3.5px solid black;
    border-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    /* width: 400px; */
    flex: 1 1 200px;
    /* max-width: 400px; */
    background-color: rgba(185, 147, 76, 0.325);
    margin: 10px;
    /* column-gap: 30px; */
}
.div_img {
    /* background-color: rgb(147, 73, 73); */
    background-color: black;
    height: 250px;
    /* width: 260px; */
    width: 240px;
    img{
      display: block;
        height: 99%;
        width: 100%;
        
        /* max-height: auto;
        max-width: auto; */
    }
}
.suma {
  display: none;
}

.div_desc {
    height: 250px;
    /* width: 160px; */
    /* background-color: rgb(63, 78, 33); */
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 30px;
    p {
        margin-top: 20px;
        /* font-size: 28px; */
        background-color: #FF9900;
        color: black;
        font-weight: bolder;
        padding: 3px;
        border-radius: 10px;
    }
    ul {
        /* margin-left: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: start;
        list-style: square; */
    }
}

.div_preco_btn {
  /* position: absolute; */
  /* margin-top: -8px; */
  /* margin-top: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  /* width: 400px; */
  /* margin-left: -240px; */
  background-color: rgba(34, 34, 34, 0.384);
  backdrop-filter: blur(2px);
}.div_preco {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 240px;
  /* background-color: red; */
}.div_btn {
  /* background-color: yellow; */
    /* margin-left: -240px; */
    height: 60px;
    /* width: 100%; */
    width: 160px;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* row-gap: 25px; */
    button {
      background-color: rgba(37, 37, 37, 0.582);
      height: 40px;
      width: 40px;
      font-size: 20px;
      color: white;
      border-radius: 50%;
      border: 3px solid white;
      transition: transform 0.5s, background-color 0.4s;
      /* margin: 5px; */
    }
    button:hover{
      background-color: #dbdbdbbc;
      cursor: pointer;
      /* transition: 0.6s;
      transition-duration: 2s;  */
    }
    p {
      background-color: black;
      color: white;
      margin: 5px;
    }
}
input {
  display: flex;
  align-items: center;
  justify-content: center;
    height: 40px;
    width: 40px;
    font-size: 20px;
      background-color: black;
      color: white;
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


@media screen and (max-width: 999px) {
    .linkPages {
      width: 710px;
      justify-content: space-between;
      padding: 25px;
      /* display: flex;
      flex-wrap: wrap; */
    }
  }
@media screen and (max-width: 750px){
  .linkPages {
      width: 360px;
      justify-content: center;
      padding: 10px 0px;
    }
}@media screen and (min-width: 1000px){
  .linkPages {
      justify-content: center;
    }
}
.linkPages {
  /* @media screen  { min-width: 950px;
    width: 700px;
  } */
   
  border: 3px solid black;
  margin: 0 auto;
  min-height: 500px;
  /* max-height: auto; */
  /* min-width: 700px; com isso nao tem wrap*/
  max-width: 1000px;
  flex-wrap: wrap;
  background-color: aliceblue;
  display: flex;

  /* flex-basis: 1 1 700px; */
}
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
:root {
  --bg: url('https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302142_1280.jpg')
}

body {
  width: 99vw;
  height: 100vh;
  background-color: black;
  /* background-blend-mode: overlay; */
  
  backdrop-filter:blur(3.5px);
  /* background-image: url('https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302142_1280.jpg'); */
  background-image: var(--bg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /*Shorthand -> background color > img > bg position > bg repeat > [bg size*] >
  bg attachment */
  /*
    backdrop-filter:blur(3.5px);
    background-image: url('https://www.comidaereceitas.com.br/wp-content/uploads/2008/06/HAMBURGUER-VEGETARIANO-780x439.jpg')
    */
}
#bodyBlend {
  background-color: rgba(0, 0, 0, 0.641);
  background-blend-mode: overlay;
  width: 99vw;
  height: 100%;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.divd {
    width: 200px;
    height: 200px;
    background-color: red;
    margin:10px;
    img{
      width: 100px;
      height: 100px;
    }
}
.inpSub {
  height: 50px;
  width: auto;
  background-color: red;
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

@media screen and (max-width: 399px){
  .prod {
    height: 240px;
    min-width: 280px;
    img {
    height: 180px;
    width: 180px;
    }
    }
}@media screen and (min-width: 400px){
  .prod {
    height: 280px;
    min-width: 300px;
    img {
    height: 240px;
    width: 240px;
    }
    }
}

.prod{
  margin: 10px;
  /* margin: 20px 5px; */
    /* margin-top: 20px; */
    /* margin: 0 auto; */
    /* margin-left: 15px; */
    /* align-self: center; */
    /* flex-grow: 1; */
    /* height: 280px;
    min-width: 300px; */
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
