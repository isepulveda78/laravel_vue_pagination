import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/users', component: App
        }
    ],
    mode: 'history'
});