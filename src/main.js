import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(iView, {
    transfer: true,
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
