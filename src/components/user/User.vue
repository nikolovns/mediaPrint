<template>
    <div class="user-container">
        <h1>User profile</h1>
        <router-view></router-view>
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

