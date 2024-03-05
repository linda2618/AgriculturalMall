import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()

// 创建实例
const request = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
})

// 请求拦截
axios.interceptors.request.use((config) => {
  config.headers.tokens = store.state.adminInfo.token
  return config
})


export default request
