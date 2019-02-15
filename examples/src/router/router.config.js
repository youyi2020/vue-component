import Vue from 'vue'
import Router from 'vue-router'
import TgMain from '../components/main.vue' 
import TgButton from '../doc/button.md' 

const navConfig = require('./nav.config.json');

Vue.use(Router);

const modules = [TgMain,TgButton];
const routes = [];

Object.keys(navConfig).map((value, index) => {
    let obj = {};
    obj.path = '/' + value;
    obj.component = modules[index];
    routes.push(obj);
});

export default new Router({
    mode: 'hash',
    routes
})
