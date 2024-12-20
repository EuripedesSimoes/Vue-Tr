
<template>

<nav class="nav_bar">
    <div class="nav_logo">
        <img src="../assets/bg-one_logo.png">
    </div>
    
    <div class="nav_list">
        <ul class="ul_nav">
            <li id="li_home">
                <a href="">Home</a>
            </li>
            <li id="li_del">
                <a href="">Delivery</a>
            </li>
            <li id="li_menu">
                <a href="">Menu</a>
            </li>
            <li id="li_cont">
                <a href="">Contato</a>
            </li>
        </ul>
    </div>
</nav>

</template>




<script>
export default {
    name: 'NavBar',
data() {
    
    return {
        logo_burg: 'https://yata-apix-98fd6fda-dce0-4882-85d9-05d63ab44b59.s3-object.locaweb.com.br/bc65206edd5d4549a4d75657d5e018e4.png',
        logo_burg_NEW: '../assets/bg-one_logo.png',
    }
    },

}

</script>




<style scoped>
:root {
    --main-color: hotpink;
    --pg1: #dbdbdb;
}

*{
margin: 0;
padding: 0;
box-sizing: 0;
}

.nav_bar {
background: black;
border-bottom: 3px solid #FF9900;
display: flex;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 120px;
}

.nav_logo {
    /*
background: blue;
border: 3px dashed black;
margin-left: 5%;
*/
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: auto;
}
.nav_logo > img {
    width: auto;
    height: 50px;
    margin-top: -7px;
}

.nav_list {
/*    
margin-left: 25%;
background: rgb(15, 49, 15);
border: 3px dashed rgb(177, 55, 55);
*/
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: 50px;
}

.ul_nav {
display: flex;
column-gap: 30px;
}
.ul_nav li {
font-size: 28px;
text-decoration: none;
list-style: none;
display: flex;
align-items: center;
justify-content: center;
}

#li_home, #li_menu{
    background-color: #FF9900;
    height: 1.9em;
    width: auto;
    border-radius: 0.3em;
    /*
    transition: transform 0.5s, background-color 0.7s, color 1.4s;
    Só colocar o 'all' no inicio que já se ajusta
    */ 
    transition: all 0.4s;
    transition-duration: 0.4s; /*Na volta, quando o mouse sair do hover*/
}
#li_del, #li_cont{
    background-color: #FF9900;
    height: 1.9em;
    width: auto;
    border-radius: 0.3em;
    transition: all 0.4s;
    transition-duration: 0.4s; /* depois que o mouse sair */
}

a{
    padding: 0 10px;
    color: black;
    font-size: 36px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: transform;
    transition-duration: 0.3s;
    /*
    transition-timing-function: ease-in;
    transition-delay: 0.5s;
    */
}

a:link {
    text-decoration: none;
}
/*
a:hover{
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(-10px);
    color: var(--pg1);
    background-color: black;
}
*/
#li_home:hover, #li_menu:hover, #li_del:hover, #li_cont:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: 0.5s;
    background-color: rgb(53, 53, 53);
    a {
        color: #FF9900;
        transition: 0.5s;
    }
}
</style>