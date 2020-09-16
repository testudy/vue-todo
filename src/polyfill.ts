import Vue, { Component } from 'vue';
import {
    Layout,
    Header,
    Menu,
    MenuItem,
    Content,
    Button,
    Form,
    FormItem,
    Input,
    Card,
    Icon,
} from 'view-design';

interface Components {
    [propName: string]: Component;
}

const components: Components = {
    'i-layout': Layout,
    'i-header': Header,
    'i-menu': Menu,
    'i-menu-item': MenuItem,
    'i-content': Content,
    'i-button': Button,
    'i-form': Form,
    'i-form-item': FormItem,
    'i-input': Input,
    'i-card': Card,
    'i-icon': Icon,
    Icon,
};

export default function () {
    // const components = Object.keys(iViewDesign).filter((key) => /^[A-Z]/.test(key));
    Object.entries(components).forEach(([key, component]) => {
        Vue.component(key as string, component as any);
    });
}
