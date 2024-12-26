<template>
    <div class="prod" id="prod_hotdog">
        <img src="../../assets/hotdog_512px.png" alt="">
        <p>Hotdog</p>
    </div>
</template>

<script>
</script>

<style scoped>

img {
    height: 240px;
    width: 240px;
    transition: transform;
    transition-duration: 1.2s;
    /*
    transition-timing-function: ease-in;
    transition-delay: 0.5s;
    */
}

/*
img:hover {
    transform: rotate(360deg) scale(1.3);
    transition: 1.5s;
    filter: drop-shadow(5px 5px 10px black);
}
*/
#prod_hotdog {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    font-family: "Playwrite IT Trad", cursive;
    font-weight: bold;
    font-size: 28px;
    position: relative;
    transition: all 1s;
}
</style>