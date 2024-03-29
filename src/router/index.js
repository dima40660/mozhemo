import { createRouter, createWebHistory } from "vue-router"
import mMain from '../components/mMain.vue'
import mPortfolio from '../components/mPortfolio.vue'
import mServices from '../components/mServices.vue'
import mProduct from '../components/mProduct.vue'
import mAboutUs from '../components/mAboutUs.vue'
import mContacts from '../components/mContacts.vue'
const routes = [
    {
        path : '/',
        name: 'Main',
        component : mMain
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: mPortfolio
    },
    {
        path : '/services',
        name : 'Services',
        component : mServices
    },
    {
        path : '/portfolio/product',
        name : 'Product',
        component: mProduct
    },
    {
        path : '/about-us',
        name : 'About-us',
        component : mAboutUs
    },
    {
        path : '/contacts',
        name : 'Contacts',
        component : mContacts
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router