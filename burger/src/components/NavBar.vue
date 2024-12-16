
<template>

<nav class="nav_bar">
    <div class="nav_logo">
        <img v-bind:src="logo_burg">
    </div>
    
    <div class="nav_list">
        <ul class="ul_nav">
            <li><a href="">Home</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Produtos</a></li>
            <li><a href="">Contato</a></li>
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
background: blue;
display: flex;
justify-content: center;
align-items: center;
width: auto;
height: auto;
border: 3px dashed black;
/*margin-left: 5%;*/
}
.nav_logo > img {
    width: auto;
    height: 50px;
}

.nav_list {
background: green;
display: flex;
justify-content: center;
align-items: center;
width: 400px;
height: 50px;
border: 3px dashed rgb(177, 55, 55);
/*margin-left: 25%;*/
}

.ul_nav {
display: flex;
column-gap: 30px;
}
.ul_nav li {
color: white;
font-size: 20px;
text-decoration: none;
list-style: none;

}

</style>
