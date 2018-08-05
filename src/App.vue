<template>
    <div id="app" class="container">
        <common-form class="mt-3" @on-submit="create"></common-form>
        <table class="table table-striped table-hover mt-5">
            <thead class="thead-light">
                <tr>
                    <th class="todo-number" scope="col">
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value="#"
                                :checked="toggleCheckAllState"
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
                ></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CommonForm from './components/CommonForm.vue';
import TodoListItem from './components/TodoListItem.vue';

export default {
    name: 'app',
    components: {
        CommonForm,
        TodoListItem,
    },
    data() {
        return {
            todos: [],
            toggleCheckAllState: false,
        };
    },
    watch: {
        todos(value) {
            let checkAllState = true;
            if (this.todos.length === 0) {
                checkAllState = false;
            } else {
                this.todos.forEach((item) => {
                    if (!item.checked) {
                        checkAllState = false;
                    }
                });
            }
            this.toggleCheckAllState = checkAllState;
        },

        /*
        存在循环watch，如何解决呢？问强哥
        toggleCheckAllState: function (checked) {
            console.log(arguments);
            this.todos = this.todos.map((item) => {
                return Object.assign({}, item, {checked: checked});
            });
        },
        */
    },
    methods: {
        /*
         * 利用random随机数生成伪GUID
         * https://zh.wikipedia.org/wiki/全局唯一标识符
         * https://baike.baidu.com/view/185358.htm
         */
        guid() {
            const raw = [
                Math.random().toString(31).substr(2),
                Math.random().toString(31).substr(2),
                Math.random().toString(31).substr(2),
            ].join('').substr(0, 32);
            return raw.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, '$1-$2-$3-$4-$5');
        },

        create(modal) {
            console.log(modal);
            modal.id = this.guid();
            this.todos.push(modal);
        },

        update(modal) {
            const index = this.todos.findIndex(item => item.id === modal.id);
            this.todos.splice(index, 1, modal);
        },

        remove(id) {
            const index = this.todos.findIndex(item => item.id === id);
            this.todos.splice(index, 1);
        },

        toggleCheckAll(checked) {
            this.todos = this.todos.map(item => Object.assign({}, item, { checked }));
        },

        checkAll() {
            this.todos = this.todos.map(item => Object.assign({}, item, { checked: true }));
        },

        toggle() {
            this.todos = this.todos.map(item => Object.assign({}, item, { checked: !item.checked }));
        },

        clean() {
            this.todos = this.todos.filter(item => !item.checked);
        },

    },
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
