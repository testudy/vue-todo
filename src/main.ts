import Vue from 'vue';
import 'view-design/dist/styles/iview.css';
import App from './App.vue';
import store from './store';
import router from './router';
import polyfill from './polyfill';

Vue.config.productionTip = false;

polyfill();

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
