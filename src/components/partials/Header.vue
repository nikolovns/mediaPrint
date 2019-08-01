<template>

    <div class="header">
        <div class="row">
            <div class="col-sm-12 col-md-2 columns">
                <div class="main-logo">
                    <img src="../../assets/logo.png" alt="Print me">
                </div>
            </div>

            <div class="col-sm-12 offset-md-6 col-md-4 columns">
                <app-user-nav></app-user-nav>
            </div>
        </div>

        <div class="row">
            <app-main-nav></app-main-nav>
        </div>
        
    </div>
    
</template>

<script>
import UserNavigation from './UserNavigation'
import MainNavigation from './MainNavigation'

export default {
    components: {
        'app-user-nav': UserNavigation,
        'app-main-nav': MainNavigation
    }    
}
</script>

<style scoped>
    .main-logo {
        max-height: 90px;
    }
    .main-logo img {
        max-height: 100%;
    }
</style>


