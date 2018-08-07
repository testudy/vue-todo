import Vue from 'vue';
import iView from 'iview';

export default function () {
    const components = Object.keys(iView).filter(key => /^[A-Z]/.test(key));
    components.forEach(key => {
        Vue.component('i' + key, Vue.component(key));
    });
}
