var TodoListItem = {
    components: {
        CommonForm: CommonForm,
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
    data: function () {
        return {
            isEdit: false,
        };
    },
    methods: {
        activateEdit: function () {
            this.isEdit = true;
        },
        deactivateEdit: function () {
            this.isEdit = false;
        },
        update: function (modal) {
            if (typeof this.$listeners['on-update'] === 'function') {
                this.$listeners['on-update'](modal);
            }
            this.deactivateEdit();
        },
        remove: function (id) {
            if (typeof this.$listeners['on-remove'] === 'function') {
                this.$listeners['on-remove'](id);
            }
        },
    },
    template: '#template-todo-list-item',
};
