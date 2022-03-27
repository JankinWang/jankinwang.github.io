import axios from 'axios'
import getIp from './getIp'
import localStorageCache from '@utils/localStorageCache.js'

const apiUrl = 'https://restapi.amap.com/v5/ip'

/**
 * ip 定位
 *
 * @export
 * @return {JSON}
 */
export default async function ipLocation() {
  const cacheLocation = localStorageCache.get('ipLocation')
  // 缓存是否有效
  if (cacheLocation) {
    return cacheLocation
  }

  const ip = await getIp()
  let { data } = await axios.get(apiUrl, {
    params: {
      key: 'a4068e59d0b9a8d824753b4afccfda54',
      type: 4,
      ip,
    },
  })

  localStorageCache.set('ipLocation', data, 3600)

  return data
}
