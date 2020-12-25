<template>
    <div class="customers-container">
        <section class="page-header">
            <a-button
                type="primary"
                @click="showModal()"
            >
                创建用户
            </a-button>
        </section>
        <section class="page-table">
            <a-table
                :columns="columns"
                :data-source="userList"
                rowKey='username'
            >
                <span slot="action" slot-scope="record">
                    <a-button type="link" @click="showModal(record)">修改</a-button>
                    <a-divider type="vertical" />
                    <a-button type="link">删除</a-button>
                </span>
            </a-table>
        </section>
        <customer-form
            :userInfo="userInfo"
            v-model="visible"
        ></customer-form>
    </div>
</template>

<script>
import CustomerForm from './CustomerFom'
const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '所属角色',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
]
export default {
    name: 'customers',
    components: {
        CustomerForm,
    },
    data () {
        return {
            columns,
            userList: [
                {
                    username: 'admin',
                    email: '123@126.com',
                    phone: '123',
                },
            ],
            visible: false,
            userInfo: {},
        }
    },
    methods: {
        showModal (record) {
            this.userInfo = record && { ...record }
            this.visible = true
        },
    },

}
</script>

<style lang='less' scoped>
   .customers-container {
       .page-header {
           padding-bottom: 20px;
       }
   }

</style>
