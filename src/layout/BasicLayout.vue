<template>
    <a-layout class="BasicLayout-container">
        <the-sidebar></the-sidebar>
        <a-layout>
            <the-navbar />
            <the-main-app>
                <router-view />
            </the-main-app>
        </a-layout>
    </a-layout>
</template>

<script>
import TheSidebar from './components/TheSidebar'
import TheNavbar from './components/TheNavbar'
import TheMainApp from './components/TheMainApp'
export default {
    name: 'BasicLayout',
    components: {
        TheSidebar,
        TheNavbar,
        TheMainApp,
    },
    data () {
        return {
            collapsible: true,
        }
    },

}
</script>

<style lang='less' scoped>
   .BasicLayout-container {

   }

</style>
