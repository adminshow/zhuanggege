import Vue from 'vue'
import axios from 'axios'

let axiosNew = axios.create({
  baseURL: 'http://localhost:8000'
})

// 请求拦截
axiosNew.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
axiosNew.interceptors.response.use((response) => {
  let status = response.status
  if (status === 200) {
    return response.data
  } else {
    return Promise.reject(response.status)
  }
}, (err) => {
  return Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$http', {
  value: axiosNew
})

export default axiosNew

export function login (loginInfo) {
  return new Promise((resolve, reject) => {
    axiosNew.post('/user/login', loginInfo).then(res => {
      resolve(res)
    })
  })
}
