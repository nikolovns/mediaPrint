<template>
  <div id="app">
    <app-media></app-media>
  </div>
</template>

<script>
    import Media from './components/media/Media.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            'app-media': Media
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
