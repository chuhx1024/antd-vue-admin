<template>
    <div class="roles-container">
        <section class="page-header">
            <a-button
                type="primary"
                @click="showModal(0)"
            >
                创建角色
            </a-button>
            <a-button
                style="margin-left: 10px;"
                type="primary"
                :disabled="!roleInfo._id"
                @click="showModal(1)"
            >
                设置角色权限
            </a-button>
        </section>
        <section class="page-table">
            <a-table
                :columns="columns"
                :data-source="rolesList"
                row-key="roleName"
                :row-selection="{
                    type: 'radio',
                    onSelect
                }"
            >
            </a-table>
        </section>
        <roles-form :visible.sync="visible[0]"></roles-form>
        <auth-tree :role-info="roleInfo" :visible.sync="visible[1]"></auth-tree>
    </div>
</template>

<script>
import RolesForm from './RolesForm'
import AuthTree from './AuthTree'
import { roleList } from '@/api/user'
import { formateDate } from '@/utils/dateUtils'
const columns = [
    {
        title: '角色名称',
        dataIndex: 'roleName',
        key: 'roleName',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        customRender: item => formateDate(item),
        key: 'createTime',
    },
    {
        title: '授权时间',
        dataIndex: 'authTime',
        customRender: item => formateDate(item),
        key: 'authTime',
    },
    {
        title: '授权人',
        dataIndex: 'authName',
        key: 'authName',
    },
]
export default {
    name: 'Roles',
    components: {
        RolesForm,
        AuthTree,
    },
    data () {
        return {
            columns,
            rolesList: [
                {
                    roleName: 'admin',
                    createTime: '123@126.com',
                },
            ],
            visible: [false, false],
            roleInfo: {},
        }
    },
    methods: {
        showModal (index) {
            this.$set(this.visible, index, true)
        },
        async getList () {
            const { data: { data } } = await roleList()
            console.log(data, 9090)
            this.rolesList = data
        },
        onSelect (row) {
            this.roleInfo = row
        },
    },
    created () {
        this.getList()
    },

}
</script>

<style lang='less' scoped>
   .roles-container {
       .page-header {
           padding-bottom: 20px;
       }
   }

</style>
