<template>
<div class="header">abidi hamudd</div>
<main>
    <section>Sessão 1</section>
    <aside>Aside1</aside>
</main>
<div>
    <form>
        <ul>
            <li>li 1</li>
            <li>li 2</li>
            <li>li 3</li>
        </ul>
    </form>
    <div>
        <input type="text">
        {{ name }}

    </div>
</div>
</template>

<script>
export default{
 name: 'App',
 
 data () {
 return {
    name: 'Calvos'

 }
}
}
</script>

<style scoped>
.header {
    color: red;
}
li {
    list-style: none;
}
</style>