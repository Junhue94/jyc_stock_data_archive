/**
 * List of All Routes
 */
import VueRouter from 'vue-router';

// Routes
import { routeLogin } from './login';
import { routeAccount } from './account';
import { routeStock } from './stock';

// Layouts
import AppLayout from '../layouts/app/AppLayout.vue';
import LoginLayout from '../layouts/login/LoginLayout.vue';

// Components
import Home from '../components/Home.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: LoginLayout,
            children: [
                ...routeLogin
            ]
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                ...routeAccount,
                ...routeStock,
                {
                    path: '',
                    name: 'index',
                    component: Home
                }
            ]
        },
        {
            path: '*',
            component: Home
        }
    ],
    // Set page position when access new route
    scrollBehavior () {
        return {
            x: 0,
            y: 0
        };
    }
});