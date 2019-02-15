import Vue from 'vue'
import Button from './src/index.vue'

const Component = Vue.extend(Button);
Button.install = function(Vue) {
    Vue.component(Button.name, Button)
    Vue.prototype.$TgButton = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}
export default Button
