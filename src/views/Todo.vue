<template>
    <i-card>
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
                        />
                    </th>
                    <th scope="col">代办列表</th>
                    <th class="todo-operation" scope="col">操作</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="3" class="todos-operation">
                        <i-button type="info" size="small" class="button" @click.prevent="checkAll">全选</i-button>
                        <i-button type="info" size="small" class="button" @click.prevent="toggle">反选</i-button>
                        <i-button type="warning" size="small" class="button" @click.prevent="clean">清除</i-button>
                    </td>
                </tr>
            </tfoot>
            <tbody>
                <todo-list-item
                    v-for="item in todos"
                    :id="item.id"
                    :key="item.id"
                    :todo="item.todo"
                    :checked="item.checked"
                    @on-update="update"
                    @on-remove="remove"
                />
            </tbody>
        </table>
    </i-card>
</template>

<script src="./Todo.ts" />

<style>
.table {
    width: 100%;
    margin-top: 16px;
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
