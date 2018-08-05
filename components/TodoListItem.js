const TodoListItem = {
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
    data () {
        return {
            isEdit: false,
        };
    },
    methods: {
        activateEdit () {
            this.isEdit = true;
        },
        deactivateEdit () {
            this.isEdit = false;
        },
        update (modal) {
            if (typeof this.$listeners['on-update'] === 'function') {
                this.$listeners['on-update'](modal);
            }
            this.deactivateEdit();
        },
        remove (id) {
            if (typeof this.$listeners['on-remove'] === 'function') {
                this.$listeners['on-remove'](id);
            }
        },
    },
    template: '#template-todo-list-item',
};
