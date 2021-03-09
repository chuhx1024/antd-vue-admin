import Vue from 'vue'
import resource from './Resource'

export default class Dict {
    constructor (dict) {
        this.dict = dict
    }

    init (names) {
        if (names === undefined || names === null) {
            throw new Error('need Dict names')
        }
        names.forEach(n => {
            Vue.set(this.dict, n, resource[n])
        })
    }
}
