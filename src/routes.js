import Home from './components/main_pages/Home.vue'
import About from './components/main_pages/About.vue'
import Products from './components/main_pages/Products.vue'
import Media from './components/media/Media.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/products', component: Products},
    {path: '/about', component: About},
    {path: '/products/business-card', component: Media}
]