<template>
    <Card>
        <common-form @on-submit="create"/>
        <table class="table">
            <thead>
                <tr>
                    <th class="todo-check" scope="col">
                        <input
                            :checked="toggleCheckAllState"
                            type="checkbox"
                            value="#"
                            @change.prevent="toggleCheckAll($event.target.checked)"
                        >
                    </th>
                    <th scope="col">代办列表</th>
                    <th class="todo-operation" scope="col">操作</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="3" class="todos-operation">
                        <Button type="info" size="small" class="button" @click.prevent="checkAll">全选</Button>
                        <Button type="info" size="small" class="button" @click.prevent="toggle">反选</Button>
                        <Button type="warning" size="small" class="button" @click.prevent="clean">清除</Button>
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
                    :checked="item.checked"
                    @on-update="update"
                    @on-remove="remove"
                />
            </tbody>
        </table>
    </Card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CommonForm from '../components/CommonForm.vue';
import TodoListItem from '../components/TodoListItem.vue';

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
.table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #e9e9e9;
}

.table thead {
    background-color: #f7f7f7;
}

.table th,
.table td {
    padding: 8px 16px;
    vertical-align: middle;
    border: 1px solid #e9e9e9;
}
.table th {
    text-align: center;
}

.table td {
}

.table .todo-check {
    width: 64px;
}

.table .todo-operation {
    width: 96px;
    text-align: center;
}

.table .todos-operation {
    text-align: right;
}

.table .button {
    margin-left: 6px;
}
</style>
