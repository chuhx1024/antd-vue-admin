<template>
    <div class="example-container">
        <h3>使用 iconfont</h3>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-line"></use>
            </svg>
        </div>
        <hr>

        <h3>主要按钮颜色</h3>
        <div>
            <a-button>Default</a-button>
            <a-button type="primary">Button</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="danger">Danger</a-button>
        </div>
        <hr>

        <h3>vuex使用</h3>
        <div>
            <a-button type="primary" @click="toggleSidbar">修改Vuex的值</a-button>
            <p>{{sidebarCollapsed}}</p>
        </div>
        <hr>

        <h3>全局过滤器</h3>
        <div>
            <p>{{ null | nullFormatter}}</p>
            <p>{{ '' | nullFormatter}}</p>
            <p>{{ undefined | nullFormatter}}</p>
        </div>
        <hr>

        <h3>使用字典数据</h3>
        <div>
            <p>{{dict.dataStatus[0]}}</p>
            <p>{{dict.dataStatus[1]}}</p>
            <a-checkbox-group v-model="CheckedClassify">
                <a-checkbox
                    v-for="(val, key) in dict.featureClassify"
                    :key="key"
                    :value="key"
                    name="match">
                    {{val}}
                </a-checkbox>
            </a-checkbox-group>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Example',
    dicts: ['dataStatus', 'featureClassify'],
    data () {
        return {
            CheckedClassify: [],
        }
    },
    computed: {
        ...mapState('app', ['sidebarCollapsed']),
    },
    methods: {
        ...mapActions('app', ['toggleSidbar']),
    },
    mounted () {
        // js 中使用 dict
        console.log(this.dict.dataStatus[0])
    },
}
</script>
<style lang="less" scoped>
    .example-container {
        padding: 20px;
    }
</style>
