<template>
    <div class="model-audit-container app-container">
        <section class="select-form">
            <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
                <a-form-model-item label="模型标识">
                    <a-input v-model="formInline.user">
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-button
                        type="primary"
                        html-type="submit"
                    >
                        开始审计
                    </a-button>
                </a-form-model-item>
            </a-form-model>
        </section>
        <section class="log-disc">
            <a-descriptions :column="4">
                <a-descriptions-item label="模型标示">123</a-descriptions-item>
                <a-descriptions-item label="当前阶段">123</a-descriptions-item>
                <a-descriptions-item label="累计审计">123</a-descriptions-item>
                <a-descriptions-item label="总体进度">123</a-descriptions-item>
            </a-descriptions>
        </section>
        <section
            class="log-view"
            ref="logView"
            @mouseover="MouseEve()"
            @mouseleave="MouseEve('ref')"
        >
            <p
                v-for="(item, index) in logList"
                :key="index"
            >
                <span>{{index}}</span>
                <span> . </span>
                <span>
                    {{item}}
                </span>
            </p>

        </section>
    </div>
</template>

<script>
import protoHelper from '@/utils/protoHelper.js'
export default {
    name: 'ModelAudit',
    data () {
        return {
            formInline: {
                user: '',
            },
            logList: [
                'cccc',
                'eeee',
            ],
            element: '',
        }
    },
    methods: {
        handleSubmit () {
            this.createWS()
            this.element = this.$refs.logView
        },
        scrollTop (data) {
            console.log(data)
            this.logList.push(data)
            this.$nextTick(() => {
                if (this.element) {
                    this.element.scrollTop = this.element.scrollHeight
                }
            })
        },
        MouseEve (flag) {
            this.element = flag ? this.$refs.logView : ''
        },
        createWS () {
            var ws = new WebSocket('ws://localhost:8975/ws')
            ws.binaryType = 'arraybuffer'
            // ws.binaryType = 'blob'
            ws.onopen = () => {
                ws.send(23)
            }
            // 接收服务端数据时触发事件
            ws.onmessage = (evt) => {
                const temp = protoHelper.AuditProgress.decode(new Uint8Array(evt.data))
                console.log(temp, 9091)
            }
        },
    },

}
</script>

<style lang='less' scoped>
   .model-audit-container {
     overflow: hidden;
     .log-disc {
       padding-top: 20px;
     }
     .log-view {
       background-color: #000;
       color: #fff;
       padding: 10px;
       overflow-x: auto;
       height: calc(100vh - 200px)
     }

   }

</style>
