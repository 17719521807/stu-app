import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login.vue"
import regisiter from "@/views/regisiter.vue"
import main from "@/views/main.vue"
Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: '/login',
    }, {
        name: 'login',
        path: "/login",
        component: login,
    },
    {
        name: 'regisiter',
        path: "/regisiter",
        component: regisiter,
    },
    {
        name: 'main',
        path: "/main",
        component: main,
    }
]

const router = new VueRouter({
    routes
})

export default router