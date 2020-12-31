<template>
    <a-modal
        :title="userInfo ? '修改' : '添加'"
        :visible='value'
        @cancel="closeModal"
        @ok="addUserhandler"
    >
        <a-form-model
            class="customerFom-container"
            :model="form"
            :label-col="{span: 4}"
            :wrapper-col="{span: 14}">
            <a-form-model-item label="用户名">
                <a-input v-model="form.username" />
            </a-form-model-item>
            <a-form-model-item label="密码">
                <a-input v-model="form.password" />
            </a-form-model-item>
            <a-form-model-item label="电话">
                <a-input v-model="form.phone" />
            </a-form-model-item>
            <a-form-model-item label="邮箱">
                <a-input v-model="form.email" />
            </a-form-model-item>
            <a-form-model-item label="角色">
                <a-select v-model="form.roleId" placeholder="please select your role">
                    <a-select-option
                        v-for="item in rolesList"
                        :key="item._id"
                        :value="item._id"
                    >
                        {{item.roleName}}
                    </a-select-option>
                </a-select>
            </a-form-model-item>
        </a-form-model>
    </a-modal>
</template>

<script>
import { addUser, roleList } from '@/api/user'
export default {
    name: 'customerFom',
    props: {
        value: Boolean,
        userInfo: {
            type: Object,
            default: () => {},
        },
    },
    data () {
        return {
            rolesList: [],
            form: {
                username: '',
                password: '',
                phone: '',
                email: '',
                roleId: '',
            },
        }
    },
    watch: {
        userInfo () {
            this.form = { ...this.userInfo }
        },
    },
    methods: {
        addUserhandler () {
            addUser(this.form)
        },
        async getRolesList () {
            const { data: { data } } = await roleList()
            console.log(data, 9090)
            this.rolesList = data
        },
        closeModal () {
            this.$emit('input', false)
        },
    },
    created () {
        this.getRolesList()
    },

}
</script>

<style lang='less' scoped>
   .customerFom-container {

   }

</style>
