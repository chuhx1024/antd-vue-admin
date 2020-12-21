<template>
    <a-layout-header class="the-navbar-container">
        <left-button></left-button>
    </a-layout-header>
</template>

<script>
import LeftButton from './components/LeftButton'
export default {
    name: 'TheNavbarr',
    components: {
        LeftButton,
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
