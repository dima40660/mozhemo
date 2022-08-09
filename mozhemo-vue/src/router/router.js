import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/mMain'
import Navbar from '../components/mNavbar'

Vue.use(Router);

let router = new Router( 
    options: {
        routes: [
            path: '/',
            name: 'main',
            component: mMain
        ]
    }
)