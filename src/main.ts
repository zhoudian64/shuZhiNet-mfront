import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueOverwatchLoading from 'vue-overwatch-loading'

axios.defaults.baseURL = "http://localhost:8000";
Vue.use(VueAxios, axios);
Vue.use(VueOverwatchLoading);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
