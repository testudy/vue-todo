import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import { ITodo } from '@/store';
import CommonForm from './CommonForm.vue';

@Component({
    components: {
        CommonForm,
    },
})
export default class TodoListItem extends Vue {
    private isEdit: boolean = false;

    @Prop({ required: true }) private readonly id!: string;

    @Prop({ required: true }) private readonly todo!: string;

    @Prop({ default: false }) private readonly checked!: boolean;

    private onActivateEdit(): void {
        this.isEdit = true;
    }

    private onDeactivateEdit(): void {
        this.isEdit = false;
    }

    @Emit()
    private onUpdate(modal: ITodo): void {
        // this.$emit('on-update', modal);
        this.onDeactivateEdit();
    }

    private onRemove(id: string): void {
        this.$emit('on-remove', id);
    }
}
