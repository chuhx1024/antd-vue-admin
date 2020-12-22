<template>
    <component :is="type" v-bind="linkProps(to)">
        <slot />
    </component>
</template>

<script>
import { isExternalLink } from '@/utils/checkData'

export default {
    props: {
        to: {
            type: String,
            required: true,
        },
    },
    computed: {
        isExternalLink () {
            return isExternalLink(this.to)
        },
        type () {
            if (this.isExternalLink) {
                return 'a'
            }
            return 'router-link'
        },
    },
    methods: {
        linkProps (to) {
            if (this.isExternalLink) {
                return {
                    href: to,
                    target: '_blank',
                    rel: 'noopener',
                }
            }
            return {
                to,
            }
        },
    },
}
</script>
