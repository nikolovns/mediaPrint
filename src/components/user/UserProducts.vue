<template>
    <div class="row">
        <div class="page-title col-md-12 columns">
            <h1>User Products</h1>
        </div>
        <form class="row col-md-12 columns" action="">
            <div class="business col-sm-12 col-md-6 columns">
                <h2>Business Cards</h2>
                <div v-for="product in userProducts" :key="product.id">
                    <div v-if="product.type == 1">
                        <p>{{product.image}}</p>
                    </div>
                </div>
            </div>

            <div class="business col-sm-12 col-md-6 columns">
                <h2>Brouchures</h2>
                <div v-for="product in userProducts" :key="product.id">
                    <div v-if="product.type == 2">
                        <p>{{product.image}}</p>
                    </div>
                </div>
            </div>

            <div class="col-md-12 columns">
                <input class="btn btn-primary" type="submit" value="Make Order">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        userProducts: {
            type: Array,
            require: true
        }
    }
}
</script>

<style>

</style>

