<template>
    <i-form ref="todoForm" :model="todoModel" inline class="common-form">
        <i-form-item prop="todoState" class="common-form-input">
            <i-input
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
            <i-button
                :size="size"
                type="info"
                @click.prevent="onCancel"
            >取消</i-button>
        </i-form-item>
        <i-form-item>
            <i-button
                :size="size"
                :disabled="isFormInvalid"
                type="primary"
                html-type="submit"
                @click.prevent="onSubmit"
            >{{btnSubmitText}}</i-button>
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
