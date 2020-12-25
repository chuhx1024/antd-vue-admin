<template>
    <a-modal
        :visible="visible"
        title="设置角色权限"
        @cancel="closeModal"
        @ok="addRole"
    >
        <a-form-model-item
            label="角色名称"
            :label-col="{span: 4}"
            :wrapper-col="{span: 14}"
        >
            <a-input v-model="roleInfo.roleName" disabled/>
        </a-form-model-item>
        <a-tree
            v-model="checkedKeys"
            checkable
            :tree-data="treeData"
        />

    </a-modal>
</template>

<script>
import { addRole } from '@/api/user'
const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
]
export default {
    name: 'AuthTree',
    props: {
        visible: Boolean,
        roleInfo: {
            type: Object,
            default: () => {},
        },
    },
    data () {
        return {
            treeData,
            checkedKeys: ['0-0-0'],
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
