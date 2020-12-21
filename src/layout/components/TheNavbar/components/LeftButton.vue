<template>
    <div
        class="LeftButton-container"
        @click="toggleSidbar"
    >
        <a-icon :type="sidebarCollapsed ? 'menu-unfold' : 'menu-fold'"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'LeftButton',
    data () {
        return {
            collapsed: true,
        }
    },
    computed: {
        ...mapState('app', ['sidebarCollapsed']),
    },
    methods: {
        ...mapActions('app', ['toggleSidbar']),
    },

}
</script>

<style lang='less' scoped>
   .LeftButton-container {
       font-size: 18px;
       width: 50px;
       text-align: center;
       cursor: pointer;
       &:hover {
           background-color: rgba(0, 0, 0, .025);
       }
   }

</style>
