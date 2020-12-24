<template>
    <div class="roles-container">
        <section class="page-header">
            <a-button
                type="primary"
                @click="showModal"
            >
                创建角色
            </a-button>
            <a-button
                style="margin-left: 10px;"
                type="primary"
            >
                设置角色权限
            </a-button>
        </section>
        <section class="page-table">
            <a-table
                :columns="columns"
                :data-source="rolesList"
            >
            </a-table>
        </section>
        <a-modal v-model="visible" title="添加角色">
            <roles-form></roles-form>
        </a-modal>
    </div>
</template>

<script>
import RolesForm from './RolesForm'
const columns = [
    {
        title: '角色名称',
        dataIndex: 'roleName',
        key: 'roleName',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '授权时间',
        dataIndex: 'authTime',
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
            visible: false,
        }
    },
    methods: {
        showModal () {
            this.visible = true
        },
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
