<template>
    <a-breadcrumb class="Breadcrumb-container">
        <a-breadcrumb-item
            v-for="(item, index) in layerList"
            :key="item.path"
        >
            <component
                :is="index !== layerList.length - 1 ? 'router-link' : 'span'"
                :to="item.path"
            >
                {{ item.meta.title}}
            </component>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
export default {
    name: 'Breadcrumb',
    computed: {
        layerList () {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const firstItem = matched[0]
            if (firstItem.name !== 'Dashboard') {
                matched = [{ path: '/dashboard', meta: { title: '仪表盘' } }, ...matched]
            }
            return matched.filter(item => item.breadcrumb !== false)
        },
    },

}
</script>

<style lang='less' scoped>
   .Breadcrumb-container {
       display: inline-block;
       padding-left: 10px;
   }
</style>
