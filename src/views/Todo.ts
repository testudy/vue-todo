import {
    Component,
    Prop,
    Ref,
    Vue,
    Emit,
} from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';
import { IStoreState } from '@/store';

import CommonForm from '../components/CommonForm.vue';
import TodoListItem from '../components/TodoListItem.vue';

@Component({
    components: {
        CommonForm,
        TodoListItem,
    },

    computed: {
        ...mapState([
            'todos',
        ]),
        ...mapState({
            toggleCheckAllState: (state) => {
                if ((<IStoreState>state).todos.length === 0) {
                    return false;
                }

                for (let i = 0, len = (<IStoreState>state).todos.length; i < len; i += 1) {
                    const item = (<IStoreState>state).todos[i];
                    if (!item.checked) {
                        return false;
                    }
                }
                return true;
            },
        }),
    },

    methods: mapMutations([
        'create',
        'update',
        'remove',
        'toggleCheckAll',
        'checkAll',
        'toggle',
        'clean',
    ]),
})
export default class Todo extends Vue {
}
