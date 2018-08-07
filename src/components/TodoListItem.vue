<template>
    <tr>
        <th scope="row">
            <input
                :value="id"
                :checked="checked"
                type="checkbox"
                @change.prevent="update({id, checked: $event.target.checked})"
            />
        </th>
        <td v-if="isEdit">
            <CommonForm
                :id="id"
                :todo="todo"
                size="small"
                btn-submit-text="修改"
                @on-cancel="deactivateEdit"
                @on-submit="update"
            />
        </td>
        <td v-else @click="activateEdit">
            {{todo}}
        </td>
        <td class="todo-operation">
            <Button
                type="warning"
                size="small"
                @click.prevent="remove(id)"
            >删除</Button>
        </td>
    </tr>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import CommonForm from './CommonForm.vue';

@Component({
    components: {
        CommonForm,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        todo: {
            type: String,
            required: true,
        },
        checked: {
            type: Boolean,
            default: false,
        },
    },
})
export default class TodoListItem extends Vue {
    isEdit = false;

    activateEdit() {
        this.isEdit = true;
    };
    deactivateEdit() {
        this.isEdit = false;
    };
    update(modal) {
        if (typeof this.$listeners['on-update'] === 'function') {
            this.$listeners['on-update'](modal);
        }
        this.deactivateEdit();
    };
    remove(id) {
        if (typeof this.$listeners['on-remove'] === 'function') {
            this.$listeners['on-remove'](id);
        }
    };
}
</script>
<style>
</style>
