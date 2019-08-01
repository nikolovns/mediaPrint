<template>
    <div class="user-navigation">
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
    .user-navigation {
        height: 90px;
        position: relative;
    }
    .user-navigation ul {
        margin: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .user-navigation ul li {
        list-style: none;
        display: inline-block;
        margin: 0 10px 0 0;
    }
    .user-navigation ul li:last-of-type{
        margin: 0;
    }
    .user-navigation ul li a {
        color: #222;
        text-decoration: none;
    }
    .user-navigation ul li a:hover {
        color: #999;
    }
</style>

