<template functional>
    <a-sub-menu :key="props.menuInfo.meta.title">
        <span slot="title">
            <i class="anticon">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="props.menuInfo.meta.icon"></use>
                </svg>
            </i>
            <span>{{ props.menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in props.menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.path">
                <app-link :to="item.path" >
                    <i class="anticon">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.meta.icon"></use>
                        </svg>
                    </i>
                    <span>{{ item.meta.title }}</span>
                </app-link>
            </a-menu-item>
            <sidebar-sub-menu v-else :key="item.key" :menu-info="item" :father-path="item.path" />
        </template>
    </a-sub-menu>
</template>
import AppLink from './AppLink'
export default {
    props: ['menuInfo', 'fatherPath'],
    components: {
        AppLink,
    },
};
