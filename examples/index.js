import Vue from 'vue'
import App from './src/app.vue'
import TgBaseUI from '../src/entry'
import router from './src/router/router.config'

Vue.use(TgBaseUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router
});