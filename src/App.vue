<template>
  <div id="app">
  <router-view></router-view>
    <!-- <app-home></app-home>
    <app-media></app-media> -->
  </div>
</template>

<script>
    import Home from './components/main_pages/Home.vue'
    import Products from './components/main_pages/Products.vue'
    import About from './components/main_pages/About.vue'
    import Media from './components/media/Media.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            'app-home': Home,
            'app-products': Products,
            'app-about': About,
            'app-media': Media,
            
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    
/*    page layout*/
    html, body, #app {
        min-height: 100%;
        height: 100%;
    }

</style>
