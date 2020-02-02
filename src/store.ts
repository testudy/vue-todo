import Vue from 'vue';
import Vuex from 'vuex';

import { guid } from './util';

Vue.use(Vuex);

export interface ITodo {
    id?: string,
    todo: string,
    checked: boolean,
}

export interface IStoreState {
    todos: Array<ITodo>,
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        todos: [],
    } as IStoreState,

    mutations: {
        create(state, payload): void {
            const model: ITodo = {
                ...payload,
                id: guid(),
            };
            state.todos.push(model);
        },

        update(state, payload): void {
            const index = state.todos.findIndex((item) => item.id === payload.id);
            const model = {
                ...state.todos[index],
                ...payload,
            };
            state.todos.splice(index, 1, model);
        },

        remove(state, id): void {
            const index = state.todos.findIndex((item) => item.id === id);
            state.todos.splice(index, 1);
        },

        toggleCheckAll(state, checked): void {
            state.todos = state.todos.map((item) => ({ ...item, checked }));
        },

        checkAll(state): void {
            state.todos = state.todos.map((item) => ({ ...item, checked: true }));
        },

        toggle(state): void {
            state.todos = state.todos.map((item) => ({ ...item, checked: !item.checked }));
        },

        clean(state): void {
            state.todos = state.todos.filter((item) => !item.checked);
        },
    },

    actions: {

    },
});
