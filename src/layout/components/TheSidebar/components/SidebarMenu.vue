<template>
    <a-menu
        theme="dark"
        :selected-keys="[activeMenu]"
        mode="inline"
    >
        <template
            v-for="item in allSideBar"
        >
            <template v-if="item.children.length === 1">
                <a-menu-item :key="item.children[0].path">
                    <app-link :to="item.children[0].path">
                        <i class="anticon">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="item.children[0].meta.icon"></use>
                            </svg>
                        </i>
                        <span>{{item.children[0].meta.title}}</span>
                    </app-link>
                </a-menu-item>
            </template>
            <sidebar-sub-menu v-else :key="item.path" :menu-info="item" :father-path="item.path"/>
        </template>

    </a-menu>
</template>

<script>
import AppLink from './AppLink'
import SidebarSubMenu from './SidebarSubMenu'
import { mapState } from 'vuex'
export default {
    name: 'SidebarMenu',
    components: {
        AppLink, SidebarSubMenu,
    },
    computed: {
        activeMenu () {
            const route = this.$route
            const { meta, path } = route
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        ...mapState('routers', ['allSideBar']),
    },
}
</script>
