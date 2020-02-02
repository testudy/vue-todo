<template>
    <tr>
        <th scope="row">
            <input
                :value="id"
                :checked="checked"
                type="checkbox"
                @change.prevent="onUpdate({id, checked: $event.target.checked})"
            />
        </th>
        <td v-if="isEdit">
            <common-form
                :id="id"
                :todo="todo"
                size="small"
                btn-submit-text="修改"
                @on-cancel="onDeactivateEdit"
                @on-submit="onUpdate"
            />
        </td>
        <td v-else @click="onActivateEdit">
            {{todo}}
        </td>
        <td class="todo-operation">
            <i-button
                type="warning"
                size="small"
                @click.prevent="onRemove(id)"
            >删除</i-button>
        </td>
    </tr>
</template>
<script src="./TodoListItem.ts" />
<style>
</style>
