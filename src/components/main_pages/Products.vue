<template>
    
    <div>
        <div class="row">
            <div class="col-md-12 columns"><h1>Products</h1></div>

            <div class="col-md-3 columns left-sidebar">
                <div>
                    <input type="checkbox" name="business-card" id="business-card">
                    <label for="business-card">Business Card</label>
                </div>
                <div>
                    <input type="checkbox" name="brochure" id="brochure">
                    <label for="brochure">Brochures</label>
                </div>
            </div>

            <div class="col-md-9 columns row right-sidebar">
                <div class="row">
                    <div class="col-md-4 columns product-grid" v-for="product in products" :key="product.id">
                        <img :src="product.imgPath" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {id: '1', imgPath: '../../src/assets/images/bc1.jpg'},
                {id: '2', imgPath: '../../src/assets/images/bc2.jpg'},
                {id: '3', imgPath: '../../src/assets/images/bc3.jpg'},
                {id: '4', imgPath: '../../src/assets/images/bc1.jpg'},
                {id: '5', imgPath: '../../src/assets/images/bc2.jpg'},
            ]
        }
    }
}
</script>

<style>
img {
    max-width: 100%;
}
.product-grid {
    margin-bottom: 30px;
}
</style>


