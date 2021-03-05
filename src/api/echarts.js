import request from '@/utils/request'

// 柱状图数据
export const barFirstData = (data) => {
    return request({
        url: '/echarts/barFirstData',
        method: 'get',
        data,
    })
}
