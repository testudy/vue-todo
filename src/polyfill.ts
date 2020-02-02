import Vue from 'vue';
import iViewDesign from 'view-design';

export default function () {
    const components = Object.keys(iViewDesign).filter((key) => /^[A-Z]/.test(key));
    components.forEach((key) => {
        const component = Vue.component(key);
        if (component) {
            Vue.component(`i${key}`, component);
        }
    });
}
