<template>
    <a-layout-sider
        class="the-sidebar-container"
        collapsible
        v-model="sidebarCollapsed"
        :trigger="null"
    >
        <the-logo />
    </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import TheLogo from './components/TheLogo'
export default {
    name: 'TheSidebar',
    components: {
        TheLogo,
    },
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
