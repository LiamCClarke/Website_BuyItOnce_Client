import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AppMain.vue'
import Categories from '../views/AppCategories.vue'
import Signup from '../views/AppSignup.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/sign-up',
        name: 'Sign-up',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router