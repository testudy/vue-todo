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
                @click.prevent="onCancel"
            >取消</button>
        </i-form-item>
        <i-form-item>
            <Button
                :size="size"
                :disabled="isFormInvalid"
                type="primary"
                html-type="submit"
                @click.prevent="onSubmit"
            >{{btnSubmitText}}</button>
        </i-form-item>
    </i-form>
</template>
<script src="./CommonForm.ts" />
<style>
    .ivu-form-inline .ivu-form-item {
        margin-bottom: 0;
    }

    .ivu-form-inline .ivu-form-item:last-child {
        margin-right: 0;
    }

    .common-form {
        display: flex;
    }

    .common-form-input {
        flex: 1;
    }
</style>
