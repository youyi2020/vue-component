<template>
    <ul>
        <router-link :to="item.vueRouterHref" tag="li" v-for="(item, index) in routes" :key="index">
            <span>{{item.cnName}}</span>
        </router-link>
    </ul>
</template>

<script>
const routes = require('../router/nav.config.json')
export default {
    data() {
        return {
            routes: routes
        }
    }
}
</script>

<style lang="less" scoped>

</style>
