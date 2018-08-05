import Vue from 'vue';
import Vuex from 'vuex';

import { guid } from './util';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        todos: [],
    },

    mutations: {
        create(state, payload) {
            const model = Object.assign({}, payload, { id: guid() });
            state.todos.push(model);
        },

        update(state, payload) {
            const index = state.todos.findIndex(item => item.id === payload.id);
            const model = Object.assign({}, state.todos[index], payload);
            state.todos.splice(index, 1, model);
        },

        remove(state, id) {
            const index = state.todos.findIndex(item => item.id === id);
            state.todos.splice(index, 1);
        },

        toggleCheckAll(state, checked) {
            state.todos = state.todos.map(item => Object.assign({}, item, { checked }));
        },

        checkAll(state) {
            state.todos = state.todos.map(item => Object.assign({}, item, { checked: true }));
        },

        toggle(state) {
            state.todos = state.todos.map(item => Object.assign({}, item, { checked: !item.checked }));
        },

        clean(state) {
            state.todos = state.todos.filter(item => !item.checked);
        },
    },

    actions: {

    },
});
