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
            </ul>
            <div class="tab-content">
                <template v-if="showSelectedTab('Details')">
                    <div id="details">
                        <router-view :userData="userData" :class="['tab-pane', showSelectedTab('Details') ? 'active' : 'fade']"></router-view>
                    </div>
                </template>

                <template v-if="showSelectedTab('Products')">
                    <div id="products">
                        <router-view name="products" :class="['tab-pane', showSelectedTab('Products') ? 'active' : 'fade']"></router-view>
                    </div>
                </template>

                <template v-if="showSelectedTab('Orders')">
                    <div id="orders">
                        <router-view name="orders" :class="['tab-pane', showSelectedTab('Orders') ? 'active' : 'fade']"></router-view>
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
            categories: ['Details', 'Products', 'Orders'],
            userData: [
                {'name': 'John Doe', 'email': 'john@mail.com', 'web': 'the-best.com', 'phone': '8888 888 888', 'address': "John's city" },
            ]
        }
    },
    methods: {
        showSelectedTab(category) {
            return this.selectedCategory == category;
        }
    }
}
</script>

