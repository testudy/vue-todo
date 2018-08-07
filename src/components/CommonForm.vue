<template>
    <i-form ref="todoForm" :model="todoModel" inline class="common-form">
        <i-form-item prop="todoState" class="common-form-input">
            <Input
                v-model="todoModel.todoState"
                :size="size"
                type="text"
                name="todo"
                placeholder="Todo..."
            />
        </i-form-item>
        <i-form-item
            v-if="typeof $listeners['on-cancel'] === 'function'"
        >
            <Button
                :size="size"
                type="info"
                @click.prevent="cancel"
            >取消</button>
        </i-form-item>
        <i-form-item>
            <Button
                :size="size"
                :disabled="isFormInvalid"
                type="primary"
                html-type="submit"
                @click.prevent="submit"
            >{{btnSubmitText}}</button>
        </i-form-item>
    </i-form>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        id: {
            type: String,
            default: '',
        },
        todo: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'default',
            validator() {
                return ['large', 'default', 'small'].indexOf !== -1;
            },
        },
        btnSubmitText: {
            type: String,
            default: '确定',
        },
    },

    computed: {
        isFormInvalid() {
            return !this.todoModel.todoState;
        },
    },
})
export default class CommonForm extends Vue {
    todoModel = {
        todoState: this.todo,
    };

    cancel() {
        if (typeof this.$listeners['on-cancel'] === 'function') {
            this.$listeners['on-cancel']();
        }
    };

    submit() {
        if (typeof this.$listeners['on-submit'] === 'function') {
            this.$listeners['on-submit']({
                id: this.id,
                todo: this.todoModel.todoState,
            });
        }
        this.$refs.todoForm.resetFields();
    };
}
</script>
<style>
    .ivu-form-inline .ivu-form-item {
        margin-bottom: 0;
    }

    .ivu-form-inline .ivu-form-item:last-child {
        margin-right: 0;
    }

    .common-form {
        display: flex;
        margin-bottom: 16px;
    }

    .common-form-input {
        flex: 1;
    }
</style>
