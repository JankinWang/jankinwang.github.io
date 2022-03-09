import axios from 'axios'
import getIp from './getIp'
const apiUrl = 'https://restapi.amap.com/v5/ip'
/**
 * ip 定位
 *
 * @export
 * @return {JSON}
 */
export default async function ipLocation() {
  const ip = await getIp()
  let { data } = await axios.get(apiUrl, {
    params: {
      key: 'a4068e59d0b9a8d824753b4afccfda54',
      type: 4,
      ip,
    },
  })

  return data
}
