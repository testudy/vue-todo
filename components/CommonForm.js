var CommonForm = {
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
            validator: function () {
                return ['large', 'normal', 'small'].indexOf !== -1;
            },
        },
        btnSubmitText: {
            type: String,
            default: '确定',
        },
    },
    data: function () {
        return {
            todoState: this.todo,
            isFormValidated: false,
        };
    },
    computed: {
        isFormInvalid: function () {
            return !this.todoState;
        },
    },
    created: function () {
        var unwatch = this.$watch('todoState', function () {
            this.isFormValidated = true;
            unwatch();
        });
    },
    template: '#template-common-form',
    methods: {
        reset: function () {
            this.todoState = '';
            this.isFormValidated = false;
            var unwatch = this.$watch('todoState', function () {
                this.isFormValidated = true;
                unwatch();
            });
        },
        cancel: function () {
            if (typeof this.$listeners['on-cancel'] === 'function') {
                this.$listeners['on-cancel']();
            }
        },
        submit: function () {
            if (typeof this.$listeners['on-submit'] === 'function') {
                this.$listeners['on-submit']({
                    id: this.id,
                    todo: this.todoState,
                });
            }
            this.reset();
        },
    },
};
