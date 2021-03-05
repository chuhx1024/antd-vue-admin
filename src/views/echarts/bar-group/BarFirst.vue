<template>
    <div class="BarFirst-container common-page">
        <div ref="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
import { barFirstData } from '@/api/echarts'
export default {
    name: 'BarFirst',
    data () {
        return {
            chartInstance: null, // echarts 实例对象
            allData: null, // 服务器返回的全部数据
            currentPage: 1, // 当前页码
            totalPage: null, // 总页数
            timeId: null, // 定时器
        }
    },
    methods: {
        // 初始化 echertInstance 对象
        initChart () {
            this.chartInstance = this.$echarts.init(this.$refs.myChart)
            // 注册鼠标进入事件
            this.chartInstance.on('mouseover', () => {
                clearInterval(this.timeId)
            })
            // 注册鼠标移出事件
            this.chartInstance.on('mouseout', () => {
                this.startInterval()
            })
        },
        // 获取服务器的 后台数据
        async getData () {
            const { data: { data } } = await barFirstData()
            this.allData = data.sort((a, b) => a.value - b.value)
            this.totalPage = this.allData.length % 5 === 0 ? this.allData.length / 5 : this.allData.length / 5 + 1
            this.updateChart()
            this.startInterval()
        },
        // 更新图表
        updateChart () {
            const start = (this.currentPage - 1) * 5
            const end = this.currentPage * 5
            const showData = this.allData.slice(start, end)
            const sellerName = showData.map(item => item.name)
            const sellerValue = showData.map(item => item.value)
            const option = {
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: sellerName,
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: sellerValue,
                }],
            }
            this.chartInstance.setOption(option)
        },
        startInterval () {
            if (this.timeId) {
                clearInterval(this.timeId)
            }
            this.timeId = setInterval(() => {
                this.currentPage++
                if (this.currentPage === this.totalPage) {
                    this.currentPage = 1
                }
                this.updateChart()
            }, 2000)
        },
    },
    mounted () {
        this.initChart()
        this.getData()
    },
    destroyed () {
        clearInterval(this.timeId)
    },

}
</script>

<style lang='less' scoped>
   .BarFirst-container {

   }

</style>
