<template>
    <div class="user-container row">
        
        <div class="page-title col-md-12">
            <h1>User profile</h1>
        </div>
        <div class="col-md-12">
            <ul class="nav nav-tabs">

                <li 
                    class="nav-item" 
                    v-for="(category, index) in categories" :key="index" 
                    @click="selectedCategory = category" 
                    >
                    <a :class="{ 'active': selectedCategory == category }" class="nav-link">{{ category }}</a>

                </li>



                <!-- <li class="nav-item">
                    <a href="#details" 
                        class="nav-link"
                        @click="tabClick"
                    >Details</a>
                </li>
                <li class="nav-item">
                    <a href="#products" class="nav-link">Products</a>
                </li>
                <li class="nav-item">
                    <a href="#order" class="nav-link">Orders</a>
                </li> -->
            </ul>
            <div class="tab-content">
                <template v-if="showSelectedTab('Details')">
                    <div id="details">
                        <router-view class="tab-pane" :class="[showSelectedTab('Details') ? 'active' : 'fade']"></router-view>
                    </div>
                </template>

                <template v-if="showSelectedTab('Products')">
                    <div id="products">
                        <router-view name="products" class="tab-pane" :class="[showSelectedTab('Products') ? 'active' : 'fade']"></router-view>
                    </div>
                </template>

                <template v-if="showSelectedTab('Orders')">
                    <div id="orders">
                        <router-view name="orders" class="tab-pane" :class="[showSelectedTab('Orders') ? 'active' : 'fade']"></router-view>
                    </div>
                </template>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import UserDetails from './UserDetails'
import UserProducts from './UserProducts'

export default {
    data() {
        return {
            selectedCategory: 'Details',
            categories: ['Details', 'Products', 'Orders']
        }
    },
    methods: {
        showSelectedTab(category) {
            return this.selectedCategory == category;
        }
    },
    components: {
        // 'app-details': UserDetails,
        // 'app-products': UserProducts
    }
}
</script>

