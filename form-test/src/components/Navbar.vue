<template>

    <nav class="nav_bar">
         <div class="nav_logo">
            <img src="/assets/logo.png">
        </div> //tem que ser uns 70px
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
        name: 'burger_esboço',
    data() {
        
        return {
            
    
        }
        },
    
    }
    
    </script>
    
    
    
    
    <style scoped>
    
    .nav_bar {
    background: red;
    display: flex;
    justify-content: center;
    align-items: space-around;
    width: 100vh;
    height: 200px;
    }
    
    .nav_logo {
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100;
    height: 120px;
    }
    
    .nav_list {
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 120px;
    }
    
    .ul_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .ul_nav li {
    color: white;
    font-size: 16px;
    }
    
    </style>