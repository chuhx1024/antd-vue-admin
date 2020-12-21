<template>
    <div class="TheLogo-container">
        <router-link to="/dashboard">
            <img class="logo-img" src="@/assets/logo.png" alt="">
            <h1 v-show="!sidebarCollapsed" class="logo-text">{{title}}</h1>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import defaultSetting from '../../../../../config/defaultSettings'
const { title } = defaultSetting
export default {
    name: 'TheLogo',
    data () {
        return {
            title,
        }
    },
    computed: {
        ...mapState('app', ['sidebarCollapsed']),
    },

}
</script>

<style lang='less' scoped>
   .TheLogo-container {
       height: 50px;
       line-height: 50px;
       background-color: #053434;
       padding-left: 24px;
       white-space: nowrap;
       .logo-img {
           width: 32px;
           vertical-align: middle;
       }
       .logo-text {
           display: inline-block;
           margin: 0;
           color: #fff;
           padding-left: 10px;
           font-size: 16px;
           vertical-align: middle;
       }
   }
</style>
