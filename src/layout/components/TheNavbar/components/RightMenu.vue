<template>
    <div class="RightMenu-container">
        <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                欢迎{{username}} <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    个人中心
                </a-menu-item>
                <a-menu-item @click="logout">
                    退出
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
import { removeToken } from '@/utils/handleCookie'
import { mapState } from 'vuex'
export default {
    name: 'RightMenu',
    computed: {
        ...mapState('user', ['username']),
    },
    methods: {
        logout () {
            removeToken()
            this.$router.push('/login')
        },
    },

}
</script>

<style lang='less' scoped>
   .RightMenu-container {
       float: right;
       padding-right: 20px;
   }

</style>
