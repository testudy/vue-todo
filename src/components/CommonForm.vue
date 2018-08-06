<template>
    <form
        :class="{'was-validated': isFormValidated}"
        novalidate
        @submit.prevent="submit"
    >
        <div class="input-group">
            <input
                v-model="todoState"
                :class="{'form-control-lg': size === 'large', 'form-control-sm': size === 'small'}"
                type="text"
                name="todo"
                placeholder="Todo..."
                required
                class="form-control"
                @keyup.esc="cancel"
            >
            <div class="invalid-tooltip">填入有效信息</div>
            <div class="input-group-append">
                <button
                    v-if="typeof $listeners['on-cancel'] === 'function'"
                    :class="{'btn-lg': size === 'large', 'btn-sm': size === 'small'}"
                    type="button"
                    class="btn btn-light"
                    @click.prevent="cancel"
                >取消</button>
                <button
                    :class="{'btn-lg': size === 'large', 'btn-sm': size === 'small'}"
                    :disabled="isFormInvalid"
                    type="submit"
                    class="btn btn-primary"
                >{{btnSubmitText}}</button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
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
            default: 'normal',
            validator() {
                return ['large', 'normal', 'small'].indexOf !== -1;
            },
        },
        btnSubmitText: {
            type: String,
            default: '确定',
        },
    },
    data() {
        return {
            todoState: this.todo,
            isFormValidated: false,
        };
    },
    computed: {
        isFormInvalid() {
            return !this.todoState;
        },
    },
    created() {
        console.log('created', this);
        const unwatch = this.$watch('todoState', () => {
            this.isFormValidated = true;
            unwatch();
        });
    },
    methods: {
        reset() {
            this.todoState = '';
            this.isFormValidated = false;
            const unwatch = this.$watch('todoState', () => {
                console.log(this);
                this.isFormValidated = true;
                unwatch();
            });
        },
        cancel() {
            if (typeof this.$listeners['on-cancel'] === 'function') {
                this.$listeners['on-cancel']();
            }
        },
        submit() {
            if (typeof this.$listeners['on-submit'] === 'function') {
                this.$listeners['on-submit']({
                    id: this.id,
                    todo: this.todoState,
                });
            }
            this.reset();
        },
    },
    template: '#template-common-form',
};
</script>
<style>
</style>
