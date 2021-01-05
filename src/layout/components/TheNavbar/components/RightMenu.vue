<template>
    <div class="RightMenu-container">
        <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                欢迎 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    个人中心
                </a-menu-item>
                <a-menu-item>
                    退出
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
export default {
    name: 'RightMenu',

}
</script>

<style lang='less' scoped>
   .RightMenu-container {
       float: right;
       padding-right: 20px;
   }

</style>
