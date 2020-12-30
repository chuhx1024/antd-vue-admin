<template>
    <a-modal
        :visible="visible"
        title="设置角色权限"
        @cancel="closeModal"
        @ok="updateRole"
    >
        <a-form-model-item
            label="角色名称"
            :label-col="{span: 4}"
            :wrapper-col="{span: 14}"
        >
            <a-input v-model="roleInfo.roleName" disabled/>
        </a-form-model-item>
        <a-tree
            v-model="roleInfo.menus"
            checkable
            defaultExpandAll
            :tree-data="treeData"
        />

    </a-modal>
</template>

<script>
import { roleUpdate } from '@/api/user'
import { mapState } from 'vuex'
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
            checkedKeys: [],
        }
    },
    computed: {
        ...mapState('routers', ['allSideBar']),
        treeData () {
            return [{
                title: '平台权限',
                key: 'all',
                children: this.forTreeItem(this.allSideBar),
            }]
        },
    },
    methods: {
        closeModal () {
            this.$emit('update:visible', false)
        },
        updateRole () {
            roleUpdate(this.roleInfo)
        },
        // 递归整理树结构
        forTreeItem (data) {
            return data.map(item => {
                const temp = {
                    title: item.meta.title,
                    key: item.path,
                }
                if (item.children && item.children.length !== 1) {
                    temp.children = this.forTreeItem(item.children)
                }
                return temp
            })
        },
    },

}
</script>
