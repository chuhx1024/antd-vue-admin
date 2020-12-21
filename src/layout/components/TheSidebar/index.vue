<template>
    <a-layout-sider
        class="the-sidebar-container"
        collapsible
        v-model="sidebarCollapsed"
        :trigger="null"
    >
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'TheSidebar',
    computed: {
        ...mapState('app', ['sidebarCollapsed']),
    },

}
</script>

<style lang='less' scoped>
   .the-sidebar-container {
       height: 100vh;
       background-color: pink;
   }

</style>
