import Home from './components/main_pages/Home.vue'

import Products from './components/main_pages/Products.vue'
import Media from './components/media/Media.vue'

import User from './components/user/User.vue'
import UserDetails from './components/user/UserDetails.vue'
import UserProducts from './components/user/UserProducts.vue'
import UserLogin from './components/user/UserLogin.vue'
import UserRegister from './components/user/UserRegister.vue'
import UserOrders from './components/user/UserOrders.vue'

import About from './components/main_pages/About.vue'

import Checkout from './components/checkout/Checkout.vue'
import ShoppingCard from './components/checkout/ShoppingCard.vue'

export const routes = [
    //homepage
    { path: '', component: Home },
    //products
    { path: '/products', component: Products },
    { path: '/products/:type/:id', component: Media },
    //user
    { path: '/user', component: User, children: [
        { path: 'login', component: UserLogin },
        { path: 'register', component: UserRegister },
        { path: ':id', components: {
            default: UserDetails,
            products: UserProducts,
            orders: UserOrders
        }},
    ]},
    //about
    { path: '/about', component: About },
    //checkout
    { path: '/shopping-card', component: Checkout, children: [
        { path: '', component: ShoppingCard }
    ] }
]