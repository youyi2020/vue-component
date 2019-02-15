import TgButton from './packages/button/index.js' 


const components = [TgButton];
const install = function(Vue) {
    components.forEach(component => {
        component.install(Vue)
    })
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}
