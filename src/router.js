import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Test from '@/views/test.vue'
import About from '@/views/about.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/test',
            component:Test
        }
    ]
})