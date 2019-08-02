<template>
    
    <div>
        <div class="row">
            <div class="col-md-12 columns"><h1>Products</h1></div>

            <div class="col-md-3 columns left-sidebar">
                <div>
                    <input v-model="productType" type="checkbox" value="business card" name="business-card" id="business-card">
                    <label for="business-card">Business Card</label>
                </div>
                <div>
                    <input v-model="productType" type="checkbox" value="brochure" name="brochure" id="brochure" checked>
                    <label for="brochure">Brochures</label>
                </div>
            </div>

            <div class="col-md-9 columns row right-sidebar">
                <div class="row">

                    <div v-for="product in filterProductObj" 
                        :key="product.id"
                        class="col-md-4 columns product-grid"
                    >
                        <router-link :to="'/products/' + prityUrl(product.type) + '/' + product.id">
                            <img :src="product.imgPath" alt="">
                        </router-link>
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
                {id: '1', imgPath: '../../src/assets/images/bc1.jpg', type: 'business card'},
                {id: '2', imgPath: '../../src/assets/images/bc2.jpg', type: 'business card'},
                {id: '3', imgPath: '../../src/assets/images/bc3.jpg', type: 'brochure'},
                {id: '4', imgPath: '../../src/assets/images/bc1.jpg', type: 'brochure'},
                {id: '5', imgPath: '../../src/assets/images/bc2.jpg', type: 'business card'},
            ],
            productType: ["business card", "brochure"],
        }
    },
    methods: {
        prityUrl(url) {
            return url.replace(' ', '-')
        }
    },
    computed: {
        filterProductObj() {
            return this.products.filter((element)=>{
                return this.productType.includes(element.type)
            })
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


