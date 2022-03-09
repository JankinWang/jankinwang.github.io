const localStorageCache = {
  /**
   * 设置缓存数据
   *
   * @param {*} key
   * @param {*} data 数据
   * @param {number} [maxAge=60000] 缓存时长（秒）
   */
  set(key, data, maxAge = 60000) {
    key = key + '_cache'

    const value = JSON.stringify({
      time: Date.now(),
      maxAge,
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
      localStorage.removeItem(key)
      return null
    } else {
      return data.data
    }
  },
}

export default localStorageCache
