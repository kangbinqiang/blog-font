import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'


Vue.use(Router)

const router = new Router({
    routes: [
        // { path: '/', component: '/login' },//路由重定向
        { path: '/', component: Index }//登录路由
        // {
        //     path: '/home',
        //     component: Home,
        //     redirect: '/welcome',
        //     children: [
        //         { path: '/welcome', component: Welcome },
        //         { path: '/users', component: Users },
        //         { path: '/permissions', component: Permissions },
        //         { path: '/roles', component: Roles },
        //         { path: '/categories', component: Cate },
        //         { path: '/params', component: Params },
        //         { path: '/list', component: List },
        //         { path: '/add/goods', component: GoodsAdd },
        //         { path: '/order', component: Order }
        //     ]
        // }
    ]
})

export default router