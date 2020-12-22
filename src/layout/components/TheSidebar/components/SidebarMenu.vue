<template>
    <div class="SidebarMenu-container">
        <a-menu
            theme="dark"
            mode="inline"
        >
            <template
                v-for="item in routesArr"
            >
                <template v-if="item.children.length === 1">
                    <a-menu-item :key="item.children[0].path">
                        <app-link :to="item.children[0].path">
                            <span>{{item.children[0].meta.title}}</span>
                        </app-link>
                    </a-menu-item>
                </template>
                <sidebar-sub-menu v-else :key="item.path" :menu-info="item" :father-path="item.path"/>
            </template>

        </a-menu>
    </div>
</template>

<script>
import AppLink from './AppLink'
import SidebarSubMenu from './SidebarSubMenu'
export default {
    name: 'SidebarMenu',
    components: {
        AppLink, SidebarSubMenu,
    },
    computed: {
        routesArr () {
            const { routes } = this.$router.options
            return routes.filter(item => item.hidden !== true)
        },
    },

}
</script>

<style lang='less' scoped>
   .SidebarMenu-container {

   }

</style>
