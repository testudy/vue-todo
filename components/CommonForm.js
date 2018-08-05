const CommonForm = {
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
            validator () {
                return ['large', 'normal', 'small'].indexOf !== -1;
            },
        },
        btnSubmitText: {
            type: String,
            default: '确定',
        },
    },
    data () {
        return {
            todoState: this.todo,
            isFormValidated: false,
        };
    },
    computed: {
        isFormInvalid () {
            return !this.todoState;
        },
    },
    created () {
        let unwatch = this.$watch('todoState', () => {
            this.isFormValidated = true;
            unwatch();
        });
    },
    template: '#template-common-form',
    methods: {
        reset () {
            this.todoState = '';
            this.isFormValidated = false;
            let unwatch = this.$watch('todoState', () => {
                console.log(this);
                this.isFormValidated = true;
                unwatch();
            });
        },
        cancel () {
            if (typeof this.$listeners['on-cancel'] === 'function') {
                this.$listeners['on-cancel']();
            }
        },
        submit () {
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
