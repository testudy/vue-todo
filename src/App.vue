<template>
    <div id="app" class="container">
        <common-form class="mt-3" @on-submit="create"/>
        <table class="table table-striped table-hover mt-5">
            <thead class="thead-light">
                <tr>
                    <th class="todo-number" scope="col">
                        <div class="form-check form-check-inline">
                            <input
                                :checked="toggleCheckAllState"
                                class="form-check-input"
                                type="checkbox"
                                value="#"
                                @change.prevent="toggleCheckAll($event.target.checked)"
                            >
                        </div>
                    </th>
                    <th scope="col">代办列表</th>
                    <th class="todo-operation" scope="col">操作</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-right">
                        <button type="button" class="btn btn-link btn-sm" @click.prevent="checkAll">全选</button>
                        <button type="button" class="btn btn-link btn-sm" @click.prevent="toggle">反选</button>
                        <button type="button" class="btn btn-link text-danger btn-sm" @click.prevent="clean">清除</button>
                    </td>
                </tr>
            </tfoot>
            <tbody>
                <tr
                    is="todo-list-item"
                    v-for="item in todos"
                    :key="item.id"
                    :id="item.id"
                    :todo="item.todo"
                    :checked.sync="item.checked"
                    @on-update="update"
                    @on-remove="remove"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CommonForm from './components/CommonForm.vue';
import TodoListItem from './components/TodoListItem.vue';

export default {
    name: 'app',
    components: {
        CommonForm,
        TodoListItem,
    },
    computed: {
        ...mapState([
            'todos',
        ]),
        ...mapState({
            toggleCheckAllState: (state) => {
                if (state.todos.length === 0) {
                    return false;
                }

                for (let i = 0, len = state.todos.length; i < len; i += 1) {
                    const item = state.todos[i];
                    if (!item.checked) {
                        return false;
                    }
                }
                return true;
            },
        }),
    },
    methods: mapMutations([
        'create',
        'update',
        'remove',
        'toggleCheckAll',
        'checkAll',
        'toggle',
        'clean',
    ]),
};
</script>

<style>
.container {
    width: 640px;
}

.table {
    table-layout: fixed;
}

.table th {
    text-align: center;
    vertical-align: middle;
}

.table td {
    vertical-align: middle;
}

.table .todo-number {
    width: 64px;
}

.table .todo-operation {
    width: 96px;
}

.table .form-check,
.table .form-check-input {
    margin-right: 0;
}
</style>
