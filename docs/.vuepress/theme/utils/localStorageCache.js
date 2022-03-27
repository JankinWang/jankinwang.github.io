const localStorageCache = {
  /**
   * 设置缓存数据
   *
   * @param {*} key
   * @param {*} data 数据
   * @param {number} [maxAge=60] 缓存时长（秒）
   */
  set(key, data, maxAge = 60) {
    key = key + '_cache'

    const value = JSON.stringify({
      time: Date.now(),
      maxAge: maxAge * 1000,
      data,
    })

    localStorage.setItem(key, value)
  },

  /**
   * 获取缓存数据
   *
   * @param {*} key
   * @return {any} data
   */
  get(key) {
    key = key + '_cache'

    const res = localStorage.getItem(key)
    if (res === null) {
      return null
    }

    const data = JSON.parse(res)
    let ex = data.time + data.maxAge

    if (data.time && ex < Date.now()) {
      // 超时
      localStorage.removeItem(key)
      return null
    } else {
      return data.data
    }
  },

  remove(key) {
    key = key + '_cache'
    return localStorage.removeItem(key)
  },
}

export default localStorageCache
