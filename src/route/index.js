import {createRouter, createWebHistory} from 'vue-router';

import EditPass from "@/view/EditPass.vue";
import LogOut from "@/view/LogOut.vue";
import Dash from "@/view/Dash.vue";
import Home from "@/view/Home.vue";
import {useAuthPiniaStore} from "@/stores/auth.js";
import {useTokenStore} from "@/stores/tokens.js";

import Details from "@/components/Details.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import LoginForm from "@/components/LoginForm.vue";

import TodoMain from "@/view/TodoMain.vue";
import GetTodo from "@/view/GetTodo.vue";
import AddTodo from "@/view/AddTodo.vue";
import API_Posts from "@/view/API_Posts.vue";


const routers = [
    {
        path: '/',
        redirect: {name: 'login_form'}
    },
    {
        path: '/web/:pageNo',
        name: 'web'
    },
    {
        path: '/dashboard',
        name: 'dash',
        component: Dash,
        children: [
            {
                path: 'edit',
                name: 'edit_pass',
                component: EditPass,
                meta: {isAuth: true}
            },
            {
                path: 'logout',
                name: 'sign_out',
                component: LogOut
            },
            {
                path: 'home',
                name: 'default',
                meta: {
                    allowAuth: true,
                    title: 'Maelezo juu ya duka letu',
                    description: 'Tembelea duka mtandao letu (online-shop) upate kujichagulia bidhaa'
                },
                component: Home
            }
        ]
    },
    {
        path: '/details',
        name: 'detail',
        meta: {
            description: 'Undani wa sampuli na bidhaa zetu kwa ujumla'
        },
        component: Details
    },
    {
        path: '/todo',
        name: 'todo',
        component: TodoMain,
        children: [
            {
                path: 'read_list',
                name: 'read',
                meta: {allowAuth: true},
                component: GetTodo
            },
            {
                path: 'add',
                name: 'add_new',
                component: AddTodo
            }
        ]
    },
    {
        path: '/login',
        name: 'login_form',
        meta: {
            title: 'Jisajili',
            description: 'karibu na ujisajili katika web-site yetu'
        },
        component: LoginForm
    },
    {
        path: '/posts',
        name: 'posts',
        meta: {
            allowAuth: true,
            title: 'Bidhaa zetu',
            description: 'Tazama ubora wa bidhaa zetu za Magodoro'
        },
        component: API_Posts
    },
    {
        path: '/:matchPage(.*)*',
        name: 'notFound',
        component: ErrorPage
    }
]

const route = createRouter({
    history: createWebHistory('/'),
    routes: routers
})
console.log(route)

route.beforeEach((to, from, next)=>{
     const auth = useAuthPiniaStore()
    const token = useTokenStore();

    if(to.meta.isAuth && !auth.isLoggedIn ){
        alert('You should be authorized before and try again!');
        return {name: 'sign_out'}
    }
    if (to.meta.allowAuth && !token.token){
        return {name: 'login_form'};
    }
    // return true

    document.title = to.meta.title || "Duka mtandao";
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && to.meta.description){
        metaDescription.setAttribute('content', to.meta.description);
    }
    next();

})
export default route