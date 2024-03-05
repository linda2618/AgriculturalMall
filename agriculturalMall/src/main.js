import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import store from './store'
import request from './axios/index.js'

const app = createApp(App)

// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 创建实例
app.provide('request', request)// 方法注入


app.use(ElementPlus)
app.use(router)
app.use(store)


app.mount('#app')

