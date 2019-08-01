<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item"><router-link to="/">Home</router-link></li>
            <li class="navbar-item"><router-link to='/products'>Products</router-link></li>
            <li class="navbar-item"><router-link to="/about">About</router-link></li>
        </ul>
    </nav>
    
</template>

<style scoped>
    .navbar {
        display: block;
        padding: 0 15px;
        margin: 15px 0;
        width: 100%;
        height: 6.5rem;
        background: #fff;
        z-index: 99;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
    }
    .navbar-list {
        list-style: none;
        margin-bottom: 0;
    }
    .navbar-item {
        position: relative;
        float: left;
        margin-bottom: 0;
    }
    .navbar-item a {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .2rem;
        margin-right: 35px;
        text-decoration: none;
        line-height: 6.5rem;
        color: #222;
    }
</style>


