<template>
    <tr>
        <th scope="row">
            <div class="form-check form-check-inline">
                <input
                    :value="id"
                    :checked="checked"
                    class="form-check-input"
                    type="checkbox"
                    @change.prevent="update({id, checked: $event.target.checked})"
                >
            </div>
        </th>
        <td v-if="isEdit">
            <common-form
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
        <td class="text-center">
            <button
                type="button"
                class="btn btn-link text-danger btn-sm"
                @click.prevent="remove(id)"
            >删除</button>
        </td>
    </tr>
</template>
<script>
import CommonForm from './CommonForm.vue';

export default {
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
    data() {
        return {
            isEdit: false,
        };
    },
    methods: {
        activateEdit() {
            this.isEdit = true;
        },
        deactivateEdit() {
            this.isEdit = false;
        },
        update(modal) {
            if (typeof this.$listeners['on-update'] === 'function') {
                this.$listeners['on-update'](modal);
            }
            this.deactivateEdit();
        },
        remove(id) {
            if (typeof this.$listeners['on-remove'] === 'function') {
                this.$listeners['on-remove'](id);
            }
        },
    },
    template: '#template-todo-list-item',
};
</script>
<style>
</style>
