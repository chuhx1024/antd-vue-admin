import Dict from './Dict'

const install = function (Vue) {
    Vue.mixin({
        data () {
            return {
                dict: {},
            }
        },
        created () {
            if (this.$options.dicts instanceof Array) {
                new Dict(this.dict).init(this.$options.dicts)
            }
        },
    })
}

export default { install }
