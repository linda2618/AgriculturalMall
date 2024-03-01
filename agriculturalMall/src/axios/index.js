import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()
// 创建实例
const request = axios.create({
    baseURL: "http://127.0.0.1:8080/api/",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
})

// 请求拦截
axios.interceptors.request.use((config) => {
  config.headers.tokens = store.commit('tokens')
  return config
})

//响应拦截
axios.interceptors.response.use(
    (res) => {
       
    }
)