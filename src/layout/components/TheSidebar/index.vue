<template>
    <a-layout-sider
        class="the-sidebar-container awesome-scroll"
        collapsible
        v-model="sidebarCollapsed"
        :trigger="null"
    >
        <the-logo />
        <sidebar-menu></sidebar-menu>
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import TheLogo from './components/TheLogo'
import SidebarMenu from './components/SidebarMenu'
export default {
    name: 'TheSidebar',
    components: {
        TheLogo, SidebarMenu,
    },
    computed: {
        ...mapState('app', ['sidebarCollapsed']),
    },

}
</script>

<style lang='less' scoped>
   .the-sidebar-container {
       height: 100vh;
       overflow-x: auto;
   }

</style>
