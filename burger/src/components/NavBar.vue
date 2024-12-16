
<template>

<nav class="nav_bar">
    <div class="nav_logo">
        <img v-bind:src="logo_burg">
    </div>
    
    <div class="nav_list">
        <ul class="ul_nav">
            <li id="li_home"><a href="http://localhost:8080/#/">Home</a></li>
            <li id="li_del"><a href="">Delivery</a></li>
            <li id="li_menu"><a href="">Menu</a></li>
            <li id="li_cont"><a href="">Contato</a></li>
            </ul>
    </div>
</nav>

</template>




<script>
export default {
    name: 'NavBar',
data() {
    
    return {
        logo_burg: 'https://yata-apix-98fd6fda-dce0-4882-85d9-05d63ab44b59.s3-object.locaweb.com.br/bc65206edd5d4549a4d75657d5e018e4.png'
    }
    },

}

</script>




<style scoped>
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
    margin-top: -5px;
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
font-size: 22px;
text-decoration: none;
list-style: none;
display: flex;
align-items: center;
justify-content: center;
}

#li_home, #li_menu{
    background-color: #FF9900;
    height: 1.9em;
    width: 3.6em;
    border-radius: 0.3em;
}
#li_del, #li_cont{
    background-color: #FF9900;
    height: 1.9em;
    width: 4.3em;
    border-radius: 0.3em;
}
li > a{
    color: black;
}
a:link {
  text-decoration: none;
}
a:hover{
    text-decoration: dashed;
    transition: 0.5s;
    color: aquamarine
}
</style>
