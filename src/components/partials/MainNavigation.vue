<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to='/products'>Products</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
        </ul>
    </nav>
    
</template>

<style scoped>
    
    nav {
        width: 100%;
        margin: 15px 0;
    }
</style>


