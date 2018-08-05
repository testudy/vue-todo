(function () {
    'use strict';

    var app = new Vue({
        el: '#app',
        components: {
            CommonForm: CommonForm,
            TodoListItem: TodoListItem,
        },
        data: {
            todos: [],
            toggleCheckAllState: false,
        },
        watch: {
            todos: function (value) {
                var checkAllState = true;
                if (this.todos.length === 0) {
                    checkAllState = false;
                } else {
                    this.todos.forEach((item) => {
                        if (!item.checked) {
                            checkAllState = false;
                        }
                    });
                }
                this.toggleCheckAllState = checkAllState;
            },

            /*
            存在循环watch，如何解决呢？问强哥
            toggleCheckAllState: function (checked) {
                console.log(arguments);
                this.todos = this.todos.map((item) => {
                    return Object.assign({}, item, {checked: checked});
                });
            },
            */
        },
        methods: {
            /*
             * 利用random随机数生成伪GUID
             * https://zh.wikipedia.org/wiki/全局唯一标识符
             * https://baike.baidu.com/view/185358.htm
             */
            guid: function () {
                const raw = [
                    Math.random().toString(31).substr(2),
                    Math.random().toString(31).substr(2),
                    Math.random().toString(31).substr(2),
                ].join('').substr(0, 32);
                return raw.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, '$1-$2-$3-$4-$5');
            },

            create: function (modal) {
                console.log(modal);
                modal.id = this.guid();
                this.todos.push(modal);
            },

            update: function (modal) {
                var index = this.todos.findIndex(item => item.id === modal.id);
                this.todos.splice(index, 1, modal);
            },

            remove: function (id) {
                var index = this.todos.findIndex(item => item.id === id);
                this.todos.splice(index, 1);
            },

            toggleCheckAll: function (checked) {
                this.todos = this.todos.map((item) => {
                    return Object.assign({}, item, {checked: checked});
                });
            },

            checkAll: function () {
                this.todos = this.todos.map((item) => {
                    return Object.assign({}, item, {checked: true});
                });
            },

            toggle: function () {
                this.todos = this.todos.map((item) => {
                    return Object.assign({}, item, {checked: !item.checked});
                });
            },

            clean: function () {
                this.todos = this.todos.filter(item => !item.checked);
            },

        },
    });
}());
