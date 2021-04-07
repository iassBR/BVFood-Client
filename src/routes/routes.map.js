import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Products from '@/pages/Products';

const routes = [

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


export default routes