<template>
    <a-modal
        :visible="visible"
        title="添加角色"
        @cancel="closeModal"
        @ok="addRole"
    >
        <a-form-model
            :model="form"
            :label-col="{span: 4}"
            :wrapper-col="{span: 14}">
            <a-form-model-item label="角色名称">
                <a-input v-model="form.roleName" />
            </a-form-model-item>
        </a-form-model>
    </a-modal>
</template>

<script>
import { addRole } from '@/api/user'
export default {
    name: 'customerFom',
    props: {
        visible: Boolean,
    },
    data () {
        return {
            form: {
                roleName: '',
            },
        }
    },
    methods: {
        closeModal () {
            this.$emit('update:visible', false)
        },
        addRole () {
            addRole(this.form)
        },
    },

}
</script>
