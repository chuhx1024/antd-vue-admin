<template>
    <a-form-model
        :model="form"
        :label-col="{span: 4}"
        :wrapper-col="{span: 14}">
        <a-form-model-item label="角色名称">
            <a-input v-model="form.roleName" />
        </a-form-model-item>
    </a-form-model>
</template>

<script>
export default {
    name: 'customerFom',
    data () {
        return {
            form: {
                roleName: '',
            },
        }
    },

}
</script>
