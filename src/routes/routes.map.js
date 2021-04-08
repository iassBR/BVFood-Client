import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Products from '@/pages/Products';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';

const routes = [

    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/carrinho',
                component: Cart,
                name: 'cart'
            },
            {
                path: '/loja',
                component: Products,
                name: 'products'
            },
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ]
    },

    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/login',
                component: Login,
                name: 'login'
            },
            {
                path: '/register',
                component: Register,
                name: 'register'
            }
        ]
    }

]


export default routes