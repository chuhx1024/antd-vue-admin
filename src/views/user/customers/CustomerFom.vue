<template>
    <a-form-model
        class="customerFom-container"
        :model="form"
        :label-col="{span: 4}"
        :wrapper-col="{span: 14}">
        <a-form-model-item label="用户名">
            <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="电话">
            <a-select v-model="form.phone" placeholder="please select your zone">
                <a-select-option value="shanghai">
                    Zone one
                </a-select-option>
                <a-select-option value="beijing">
                    Zone two
                </a-select-option>
            </a-select>
        </a-form-model-item>
    </a-form-model>
</template>

<script>
export default {
    name: 'customerFom',
    props: {
        userInfo: {
            type: Object,
            default: () => {},
        },
    },
    data () {
        return {
            form: {
                username: '',
                phone: '',
            },
        }
    },
    watch: {
        userInfo () {
            this.form = { ...this.userInfo }
        },
    },

}
</script>

<style lang='less' scoped>
   .customerFom-container {

   }

</style>
