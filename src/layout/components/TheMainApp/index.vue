<template>
    <a-layout-content class="app-main">
        <slot />
    </a-layout-content>
</template>

<script>
export default {
    name: 'TheMainApp',
}
</script>
<style lang="less" scoped>
    .app-main {
        padding: 10px;
    }
</style>
