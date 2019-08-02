<template>
    <div class="user-container row">
        
        <div class="page-title col-md-12">
            <h1>User profile</h1>
        </div>
        <router-view></router-view>
        <router-view name="products"></router-view>
    </div>
</template>

<script>
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import UserDetails from './UserDetails'
import UserProducts from './UserProducts'

export default {
    components: {
        // 'app-details': UserDetails,
        // 'app-products': UserProducts
    }
}
</script>

