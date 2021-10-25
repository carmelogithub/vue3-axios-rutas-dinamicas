import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from "vue-axios"
//import Vue from "vue"
/*
const base = axios.create({
    baseURL:"https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
});

Vue.prototype.$http=base;
Vue.use(Vueaxios,axios);
*/

createApp(App).use(Vueaxios,axios).use(router).mount('#app')
