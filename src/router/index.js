import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import DashboardHome from "../views/DashboardHome"
import Dashboard from "../views/Dashboard"
import Products from "../views/Products.vue"

Vue.use(VueRouter)

const routes = [

    // home
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: {name: "Login"}
    },

    // login
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    // DashboardHome
    {
        path: '/dashboardhome',
        name: 'DashboardHome',
        component: DashboardHome,
        redirect: {name: 'Dashboard'},
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'Products',
                component: Products
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
