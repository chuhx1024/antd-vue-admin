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
            defaultExpandAll
            :tree-data="treeData"
        />

    </a-modal>
</template>

<script>
import { addRole } from '@/api/user'
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
        routesArr () {
            const { routes } = this.$router.options
            return this.forFilter(routes)
        },
        treeData () {
            return [{
                title: '平台权限',
                key: 'all',
                children: this.forTreeItem(this.routesArr),
            }]
        },
    },
    methods: {
        closeModal () {
            this.$emit('update:visible', false)
        },
        addRole () {
            addRole(this.form)
        },
        // 递归过滤 路由上的 hidden: true
        forFilter (router) {
            return router.filter(item => {
                if (item.children) {
                    item.children = this.forFilter(item.children)
                }
                return item.hidden !== true
            })
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
