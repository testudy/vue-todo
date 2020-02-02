import {
    Component,
    Prop,
    Ref,
    Vue,
} from 'vue-property-decorator';

@Component
export default class CommonForm extends Vue {
    private todoModel = {
        todoState: '',
    };

    @Prop({ default: '' }) private readonly id!: string;

    @Prop({ default: '' }) private readonly todo!: string;

    @Prop({
        default: 'default',
        validator(value: string): boolean {
            return ['large', 'default', 'small'].indexOf(value) !== -1;
        },
    }) private readonly size!: string;

    @Prop({ default: '确定' }) private readonly btnSubmitText!: string;

    @Ref() private readonly todoForm!: HTMLFormElement;

    private get isFormInvalid(): boolean {
        return !this.todoModel.todoState;
    }

    constructor(...args: Array<any>) {
        super();
        this.todoModel.todoState = this.todo;
    }

    private onSubmit(): void {
        this.$emit('on-submit', {
            id: this.id,
            todo: this.todoModel.todoState,
        });
        this.todoForm.resetFields();
    }

    private onCancel(): void {
        this.$emit('on-cancel');
    }
}
