<template>
    <a-layout-header class="the-navbar-container">
        <left-button></left-button>
        <bread-crumb></bread-crumb>
        <right-menu />
    </a-layout-header>
</template>

<script>

import LeftButton from './components/LeftButton'
import BreadCrumb from './components/BreadCrumb'
import RightMenu from './components/RightMenu'
export default {
    name: 'TheNavbarr',
    components: {
        LeftButton, BreadCrumb, RightMenu,
    },

}
</script>

<style lang='less' scoped>
   .the-navbar-container {
       background-color: #fff;
       padding: 0;
       height: 50px;
       line-height: 50px;

   }

</style>
