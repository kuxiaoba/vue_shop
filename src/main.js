import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 手动配置elementui
import ElementUI from 'element-ui'
import ' element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
    //导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式
import './assets/css/global.css'
//
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')