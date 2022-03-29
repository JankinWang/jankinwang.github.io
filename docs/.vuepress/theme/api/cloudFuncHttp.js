import axios from 'axios'
import { Message } from 'element-ui'
import localStorageCache from '@utils/localStorageCache'

let httpClient = axios.create({
  baseURL: 'https://8baf1136-b2e3-4a81-afc2-bc969b7560a5.bspapp.com/',
})

// 添加请求拦截器
httpClient.interceptors.request.use(
  // success
  function(config) {
    return config
  },

  // error
  function(error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
httpClient.interceptors.response.use(
  // success
  function(response) {
    const method = response.config.method.toLowerCase()
    const { code, msg, data } = response.data

    if (code === 500) {
      // 错误
      Message({
        message: String(msg),
        type: 'error',
      })
      return Promise.reject({ code, msg, data })
    } else if (code === 800) {
      // 警告
      Message({
        message: String(msg),
        type: 'warning',
      })
    } else if (code === 200 && method !== 'get') {
      // 成功
      Message({
        message: String(msg),
        type: 'success',
      })
    }

    return data
  },

  // error
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

httpClient = Object.create(httpClient)
httpClient.getWithCache = async function(url, config, refresh = false) {
  const key = config.cacheKey,
    maxAge = config.cacheAge || 100
  // 是否使用缓存
  if (!refresh && typeof key === 'string' && key.length > 1) {
    const cacheData = await localStorageCache.get(key)
    if (cacheData !== null) {
      return cacheData
    }
    delete config.cacheKey
    delete config.cacheAge
  }
  // 缓存失效
  const newData = await this.get(url, config)
  await localStorageCache.set(key, newData, maxAge)
  return newData
}

export default httpClient
