<template>
    <div class="row">
        <div class="col-sm-12 col-md-4">
            <router-link class="block-item" tag="div" to="/products">
                <p>Create your own business cards very easily</p>
            </router-link>
        </div>
        <div class="col-sm-12 col-md-4">
            <router-link class="block-item" tag="div" to="/products">
                <p>Create your own brochures</p>
            </router-link>
        </div>
        <div class="col-sm-12 col-md-4">
            <router-link class="block-item" tag="div" to="/user/register">
                <p><mdb-icon icon="chess-knight" />Create your account and you will have more creation options</p>
            </router-link>
        </div>
    </div>
    
    
</template>

<script>
export default {
    
}
</script>


<style>
.block-item {
    border: 1px solid #999;
    height: 300px;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
}
.block-item p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 20px;
    text-align: center;
    font-size: 18px;
}
</style>


