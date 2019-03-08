import Vue from 'vue';
import Router from 'vue-router';
import Form from './components/Form/Form.vue';
import ThankYou from './components/ThankYou/ThankYou.vue';
import Home from './components/Home/Home.vue';

Vue.use(Router)

export default new Router ({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Form',
            component: Form
        },
        {
            path: '/ThankYou',
            component: ThankYou
        }
    ]
})