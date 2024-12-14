
<template>

    <nav class="nav_bar">
        <div class="nav_logo">
            <img v-vind:src="logo_burg">
        </div>
        
        <div class="nav_list">
            <ul class="ul_nav">
                <li>Home</li>
                <li>Sobre</li>
                <li>Produtos</li>
                <li>Contato</li>
                </ul>
        </div>
    </nav>
    
    </template>
    
    
    
    
    <script>
    export default {
        name: 'NavBar',
    data() {
        
        return {
            logo_burg: "../assets/burger_logo.png"
            
    
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
    background: rgb(109, 48, 48);
    border: 3px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100px;
    }
    
    .nav_logo {
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    border: 3px dashed black;
    margin-left: 5%;
    }
    .nav_logo > img {
        width: 80px;
        height: 70px;
    }
    
    .nav_list {
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    border: 3px dashed rgb(177, 55, 55);
    margin-left: 25%;
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
